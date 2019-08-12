import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div className = {styles.message}>
            <div className = {styles.message__info}>
                <div className = {styles.author}>{props.author}</div>
                <div className = {styles.time}>{props.time}</div>
            </div>
            {props.message}
        </div>
    );
}

export default Message;