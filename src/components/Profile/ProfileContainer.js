import React from 'react';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import {connect} from 'react-redux';
import { setProfileInfoAC, toggleIsFetchingAC } from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api';

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId 
            ? this.props.match.params.userId
            : 2;
            usersAPI.getUserProfile(userId).then(data => {
            this.props.setProfileInfo(data);
            this.props.toggleIsFetching(false);
        });
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
        isFetching: state.usersPage.isFetching
    }
};
let WithUrlDataContainerComponent = withRouter(ProfileAPIComponent);
//Component for getting data from URL 

const ProfileContainer = connect(mapStateToProps, 
    {
        toggleIsFetching: toggleIsFetchingAC,
        setProfileInfo: setProfileInfoAC
    }
)(WithUrlDataContainerComponent);



export default ProfileContainer;
