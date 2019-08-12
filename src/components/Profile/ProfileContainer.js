import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import {connect} from 'react-redux';
import { setProfileInfoAC, toggleIsFetchingAC } from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        debugger;
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId: 2}`).then(response => {
            this.props.setProfileInfo(response.data);
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
