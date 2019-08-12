import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (messageText) => {
            dispatch(updateNewMessageBodyCreator(messageText));
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;