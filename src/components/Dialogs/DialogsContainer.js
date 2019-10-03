import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, getDialogs } from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs();
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
        newMessageText: state.dialogsPage.newMessageText,
        isFetching:  state.dialogsPage.isFetching
    }
};

export default compose(
    connect(mapStateToProps, 
    { sendMessage: sendMessageCreator, getDialogs: getDialogs}),
    withAuthRedirect,
    withRouter
)(DialogsContainer);