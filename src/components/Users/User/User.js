import React from 'react';
import styles from './User.module.css';
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
let User = ({user, followingInProgress, toggleFollowing}) => {
        return ( <div className = {styles.user} key = {user.id}>
            <div className={styles.user__photo}>
                <NavLink to={'/profile' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small: userPhoto} alt="user-pic"/>
                </NavLink>
            </div>
            <div className={styles.follow}>
                <button 
                    disabled={followingInProgress.some( id => id === user.id )} 
                    onClick={() => {toggleFollowing(user.id, user.followed)}}>
                    {user.followed ? 'Unfollow': 'Follow'}
                </button>
            </div>
            <div className={styles.user__name}>
                <NavLink to={'/profile' + user.id}>
                    {user.name}
                </NavLink>
            </div>
            <div className = {styles.user__location}>{user.location ? user.location.city: '' }</div>
            <div className = {styles.user__status}>
                {user.status}
            </div>
        </div>
        );
    
};

export default User;