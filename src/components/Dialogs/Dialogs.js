import React, { useEffect, useRef } from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import NewMessage from './NewMessage';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map( dialog => {
        return (
            <DialogItem 
                key = {dialog.id} 
                {...dialog}
                getDialogMessages = {props.getDialogMessages}
                activeDialog = {props.activeDialog}
            />);
    });
    const messagesElements = props.messages.map( message => {
        return (
            <Message 
            key = {message.id} 
            {...message}
            isSelected = {props.selectedMessages.includes(message.id)}
            activeDialog = {props.activeDialog}
            selectMessage = {props.selectMessage}
            />
        );
    });

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    const onMessageRemove = () => {
        props.selectedMessages.forEach(message => {
            props.removeMessage(message, props.activeDialog);
        });
    }
    const onMessageSpam = () => {
        props.selectedMessages.forEach(message => {
            props.spamMessage(message.id, props.activeDialog);
        });
    }
    useEffect(scrollToBottom, [messagesElements]);

    return (
        <div className = {styles.dialogs}> 
            <div className = {styles.dialogs__items}>
                { dialogsElements }
            </div>
            <div className = {styles.messages}>        
                { messagesElements }    
                <div ref={ messagesEndRef } /> 
                { props.selectedMessages.length > 0 && <div className={styles.messages__control}>
                    <button onClick={ onMessageRemove }>Remove</button>
                    <button onClick= {onMessageSpam }>Spam</button>
                </div>  
                }
                <NewMessage sendMessage={props.sendMessage} dialogId={props.activeDialog} />
            </div>
        </div>
    );
}

export default Dialogs;