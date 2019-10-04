import React from 'react';
import styles from './DialogItem.module.css';
import user from '../../../assets/images/user.png'
const DialogItem = (props) => {
    const onDialogSelected = () => {
        props.getDialogMessages(props.id);
    }

    return (
        <div className={styles.dialog}
            id = {props.id} 
            onClick = { onDialogSelected }
            className = {props.id === props.activeDialog ? `${styles.active} ${styles.dialog}` : styles.dialog}>
                <img className={ styles.user__photo } src={props.photos.small ? props.photos.small : user} alt="user" />
                <span className={ styles.user__name }>{props.userName} </span>
                {props.hasNewMessages && <span className={styles.unreaded}>{props.newMessagesCount}</span> }
                <span className={styles.date}>{new Date(props.lastDialogActivityDate).toLocaleDateString('en')}</span>
        </div> 
    );
}

export default DialogItem;