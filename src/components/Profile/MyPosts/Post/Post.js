import React from 'react';
import styles from './Post.module.css';
import user from '../../../../assets/images/user.png';

const Post = (props) => {
    return (
        <div className = {styles.post}>
            <div className={styles.author__photo}>
                <img src={user} alt="user-pic"/>
            </div>
            <div className={styles.author__name}>
                {props.author}
            </div>
            <div className = {styles.date}>{props.date}</div>
            <div className = {styles.body}>
                {props.body}
            </div>
            <div className = {styles.controls}>
                <button className="like">like</button>
                <button className="reply">reply</button>
            </div>
        </div>
    );
}

export default Post;