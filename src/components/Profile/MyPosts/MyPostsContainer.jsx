import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';



const mapStateToProps = (state) => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
})
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateNewPostText: (text) => {
            dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        },
        addPost: () => {
            dispatch({type: 'ADD-POST'})
        }
})
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;