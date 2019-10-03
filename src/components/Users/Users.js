import React from 'react';
import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

let Users = (props) => {
        return (<div>
            {props.users.map(user => {
                return <User
                    user={user} 
                    key = {user.id}
                    followingInProgress={props.followingInProgress} 
                    toggleFollowing={props.toggleFollowing} />
            })}
            <Paginator 
                pageSize={props.pageSize} 
                itemsCount={props.totalUsersCount} 
                onPageChanged={props.onPageChanged} 
                currentPage={props.currentPage}/>
    </div>);
};

export default Users;