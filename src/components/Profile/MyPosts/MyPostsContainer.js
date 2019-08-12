import React from 'react';
import {addPostAC,updateNewPostTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
const MyPostsContainer = connect(mapStateToProps, 
    {
        addPost: addPostAC,
        updateNewPostText: updateNewPostTextAC
    })(MyPosts);

export default MyPostsContainer;