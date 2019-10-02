import React from 'react';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let myId = this.props.isAuth ? this.props.authorizedUserId : 2
        let userId = this.props.match.params.userId ? this.props.match.params.userId : myId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return  <>
                    <Preloader isFetching={this.props.isFetching}/>
                    <Profile { ...this.props } isOwner= { !this.props.match.params.userId }/>
                </>;
    }
};
let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        authorizedUserId: state.authPage.userId,
        isFetching: state.usersPage.isFetching
    }
};

export default compose(
    connect(mapStateToProps, { getProfile: getProfile, getStatus: getStatus, updateStatus: updateStatus, savePhoto: savePhoto }),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
