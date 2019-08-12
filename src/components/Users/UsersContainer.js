import React from 'react';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, toggleIsFetchingAC} from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent  extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers (response.data.items, response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching('true');
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setCurrentPage(p, response.data.items);
            this.props.toggleIsFetching(false);
        });
    }
    
    render() {
        return <Preloader isFetching={this.props.isFetching}>
            <Users 
                totalUsersCount = {this.props.totalUsersCount}  
                users = {this.props.users}
                onPageChanged = {this.onPageChanged}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
            />
        </Preloader>;
    }
};


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users, totalUsersCount) => {
            dispatch(setUsersAC(users, totalUsersCount));
        },
        setCurrentPage: (currentPage, users) => {
            dispatch(setCurrentPageAC(currentPage, users));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);


export default UsersContainer;
