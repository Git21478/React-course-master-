import s from './Users.module.css'
import React from 'react'
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map (p => <span className={props.currentPage === p && s.selectedPage} 
                onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                     )}
            </div>
            {
                props.users.map(u => 
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "62d36086-8cf0-4417-a821-026cd8b27b32"
                                        }                                  
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })

                                    
                                
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "62d36086-8cf0-4417-a821-026cd8b27b32"
                                        }                                     
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                
        })

                                    
                                
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
} 

export default Users;