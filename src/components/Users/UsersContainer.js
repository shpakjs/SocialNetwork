import React from 'react';
import {connect} from 'react-redux';
import {toggleFollowing, requestUsers} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';

class UsersContainer  extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (p) => {
        this.props.requestUsers(p, this.props.pageSize);
    }
    render() {
        return  <>
                    <Preloader isFetching={this.props.isFetching}/>
                    <Users 
                        totalUsersCount = {this.props.totalUsersCount}
                        pageSize = {this.props.pageSize}
                        users = {this.props.users}
                        currentPage = {this.props.currentPage}
                        toggleFollowing = {this.props.toggleFollowing}
                        toggleFollowingProgress = {this.props.toggleFollowingProgress}
                        onPageChanged={this.onPageChanged}
                        followingInProgress = {this.props.followingInProgress}
                        />
                </>;
    }
};

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        toggleFollowing: toggleFollowing,
        requestUsers: requestUsers
    }),
    withAuthRedirect
)(UsersContainer);
