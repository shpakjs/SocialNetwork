import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, getUsers} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer  extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    }
    render() {
        return  <>
                    <Preloader isFetching={this.props.isFetching}/>
                    <Users 
                        totalUsersCount = {this.props.totalUsersCount}
                        pageSize = {this.props.pageSize}
                        users = {this.props.users}
                        currentPage = {this.props.currentPage}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                        toggleFollowingProgress = {this.props.toggleFollowingProgress}
                        onPageChanged={this.onPageChanged}
                        followingInProgress = {this.props.followingInProgress}
                        />
                </>;
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        getUsers: getUsers
    }),
    withAuthRedirect
)(UsersContainer);
