import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

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

    let newPostElement = React.createRef();
    
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text  = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.posts}>
            <div>My posts</div>
            <div className = {styles.add__post}>
                <textarea rows="10" ref={ newPostElement } onChange={onPostChange} value={props.newPostText}/>
                <button onClick={ onAddPost } >Add post</button>
            </div>
            <div>{ posts }</div>
        </div>
    );
}

export default MyPosts;