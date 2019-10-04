import React from 'react';
import Dialogs from './Dialogs';
import { sendMessage, getDialogs, getDialogMessages, selectMessage, removeMessage, spamMessage } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs();
        if(this.props.dialogs.length > 0) this.props.getDialogMessages(this.props.dialogs[0]);
    }
    
    render() {
        return  <>
            <Preloader isFetching={this.props.isFetching}/>
            <Dialogs { ...this.props }/>
        </>;
    }
};

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        activeDialog: state.dialogsPage.activeDialog,
        selectedMessages: state.dialogsPage.selectedMessages,
        isFetching:  state.dialogsPage.isFetching, 
    }
};

export default compose(
    connect(mapStateToProps, 
    { 
        sendMessage: sendMessage, 
        getDialogs: getDialogs,
        getDialogMessages: getDialogMessages,
        selectMessage: selectMessage,
        removeMessage: removeMessage,
        spamMessage: spamMessage
    }),
    withAuthRedirect,
    withRouter
)(DialogsContainer);