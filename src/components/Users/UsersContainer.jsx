import React from 'react'
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
    })
    }

    render() {
        return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users  totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                        followingInProgress={this.props.followingInProgress} />
                        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch({type: 'FOLLOW', userId})
        },
        unfollow: (userId) => {
            dispatch({type: 'UNFOLLOW', userId})
        },
        setUsers: (users) => {
            dispatch({type: 'SET-USERS', users})
        },
        setCurrentPage: (currentPage) => {
            dispatch({ type: 'SET-CURRENT-PAGE', currentPage})
        },
        setUsersTotalCount: (totalCount) => {
            dispatch({ type: 'SET-USERS-TOTAL-COUNT', totalCount})
        },
        toggleIsFetching: (isFetching) => {
            dispatch({ type: 'TOGGLE-IS-FETCHING', isFetching})
        },
        toggleIsFollowingProgress: (isFetching, userId) => {
            dispatch({ type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)