import React from 'react';
import bg from './../../../assets/images/profile-bg.jpg';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    let info = props.info;
    return (<div className = {styles.profile}>
            <div className = {styles.profile__header}>
                <img src = {bg} alt=""/>
            </div>
            <div className = {styles.user__info}>
                <div className = {styles.user__photo}>
                    <img src={info.photos.small != null ? info.photos.small: userPhoto} alt="user-picture"/>
                </div>
                <div className = {styles.info}>
                    <h4 className= {styles.name}>{info.fullName}</h4>
                    <div className= {styles.info__item}>{info.lookingForAJobDescription}</div>
                    <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus}/>
                </div>
            </div>
        </div>);
}

export default ProfileInfo;