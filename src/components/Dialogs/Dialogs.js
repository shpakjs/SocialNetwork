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
            />);
    });
    /*let messagesElements = props.messages.map( message => {
        return (
            <Message 
            key = {message.id} 
            message = { message.message }
            author = {message.author}
            time = {message.time}
            />
        );
    });*/
    return (
        <div className = {styles.dialogs}> 
            <div className = {styles.dialogs__items}>
                { dialogsElements }
            </div>
            <div className = {styles.messages}>                
                <NewMessage sendMessage={props.addMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;