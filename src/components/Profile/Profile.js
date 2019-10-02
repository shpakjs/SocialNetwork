import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <div className={styles.profile} >
            { 
                props.profileInfo !== null 
                ? <><ProfileInfo 
                    info={props.profileInfo} 
                    status= {props.status}
                    updateStatus = {props.updateStatus} 
                    isOwner = { props.isOwner } 
                    savePhoto = { props.savePhoto }/>
                    <MyPostsContainer posts={props.posts} /></>
                : ''
            }
        </div>
    );
}

export default Profile;