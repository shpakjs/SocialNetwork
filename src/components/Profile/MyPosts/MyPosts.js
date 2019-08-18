import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost';

const MyPosts = (props) => {

    let posts = props.posts.map( post => {
        return (<Post 
            key = { post.id }
            id = { post.id } 
            author = { post.author }
            body = { post.body }
            date = { post.date }
        />);
    });
    let onAddPost = (newPostText) => {
        props.addPost(newPostText);
    }

    return (
        <div className={styles.posts}>
            <div>My posts</div>
            <NewPost addPost={onAddPost}/>
            <div>{ posts }</div>
        </div>
    );
}

export default MyPosts;