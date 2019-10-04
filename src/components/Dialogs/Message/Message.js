import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    const onMessageSelected = () => {
        props.selectMessage(props.id);
    }

    return (
        <div className={styles.message__wrapper} >
            <div 
                id={props.id} 
                className = {`
                    ${styles.message} 
                    ${ props.viewed ? '' : styles.unviewed } 
                    ${ props.recipientId === props.activeDialog ? styles.my : '' }
                    ${ props.isSelected ? styles.selected : '' }`}
                onClick={onMessageSelected}>
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