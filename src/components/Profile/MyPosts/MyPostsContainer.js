import React from 'react';
import {addPostAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
};
const MyPostsContainer = connect(mapStateToProps, { addPost: addPostAC })(MyPosts);

export default MyPostsContainer;