import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {styles.post}>
            <div className={styles.author__photo}>
                <img src="https://i.pinimg.com/564x/68/24/9f/68249f6646dc1bb6c87de69edb692974.jpg" alt=""/>
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