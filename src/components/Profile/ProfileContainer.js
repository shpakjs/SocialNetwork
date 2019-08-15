import React from 'react';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import {connect} from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 1432;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return  <>
                    <Preloader isFetching={this.props.isFetching}/>
                    <Profile { ...this.props }/>
                </>;
    }
};
let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        isFetching: state.usersPage.isFetching
    }
};



export default compose(
    connect(mapStateToProps, {getProfile: getProfile, getStatus: getStatus, updateStatus: updateStatus}),
    //withAuthRedirect,
    withRouter
)(ProfileContainer);
