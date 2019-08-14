import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let dialogsElements = props.dialogs.map( dialog => {
        return (
            <DialogItem 
                key = {dialog.id} 
                name = {dialog.name} 
                id = {dialog.id}
            />);
    });
    let messagesElements = props.messages.map( message => {
        return (
            <Message 
            key = {message.id} 
            message = { message.message }
            author = {message.author}
            time = {message.time}
            />
        );
    });

    let onUpdateNewMessageBody = () => {
        let messageText = newMessageElement.current.value;
        props.updateNewMessageBody(messageText);
    }


    return (
        <div className = {styles.dialogs}> 
            <div className = {styles.dialogs__items}>
                { dialogsElements }
            </div>
            <div className = {styles.messages}>
                { messagesElements }
                <div className={ styles.new__message }>
                    <textarea ref={ newMessageElement } onChange={ onUpdateNewMessageBody } value={props.newMessageText}></textarea>
                    <button onClick={ props.addMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;