import React from 'react';
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
    let messagesElements = props.messages.map( message => {
        return (
            <Message 
            key = {message.id} 
            {...message}
            activeDialog = {props.activeDialog}
            />
        );
    });
    return (
        <div className = {styles.dialogs}> 
            <div className = {styles.dialogs__items}>
                { dialogsElements }
            </div>
            <div className = {styles.messages}>        
                { messagesElements }        
                <NewMessage sendMessage={props.sendMessage} dialogId={props.activeDialog}/>
            </div>
        </div>
    );
}

export default Dialogs;