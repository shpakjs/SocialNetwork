import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';

let Users = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages = [];
        for(let i=1; i < pagesCount; i++) {
            pages.push(i);
        }

        return (<div>
            {
                props.users.map (user =>  <div className = {styles.user} key = {user.id}>
                    <div className={styles.user__photo}>
                        <NavLink to={'/profile' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small: userPhoto} alt="user-pic"/>
                        </NavLink>
                    </div>
                    <div className={styles.follow}>
                        {
                            user.followed
                            ? <button disabled={props.followingInProgress.some( id => id === user.id )} onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some( id => id === user.id )} onClick = {() => {props.follow(user.id)}}>Follow</button>
                        }
                    </div>
                    <div className={styles.user__name}>
                        {user.name}
                    </div>
                    <div className = {styles.user__location}>{user.location ? user.location.city: '' }</div>
                    <div className = {styles.user__status}>
                        {user.status}
                    </div>
                </div>
                )
            }
            <div className={styles.pagination}>
                {
                    pages.map(p => {
                        return <span key={p} onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p ? styles.selected : '' }> {p} </span>
                    })
                }
            </div>
    </div>);
    
};

export default Users;