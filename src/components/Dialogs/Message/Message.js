import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div className={styles.message__wrapper}>
            <div className = {`${styles.message} ${ props.viewed ? '' : styles.unviewed } ${ props.recipientId == props.activeDialog ? styles.my : '' }`}>
                <div className = {styles.message__info}>
                    <div className = {styles.author}>{props.senderName}</div>
                    <div className = {styles.time}>{new Date(props.addedAt).toLocaleDateString()}</div>
                </div>
                {props.body}
            </div>
        </div>
    );
}

export default Message;