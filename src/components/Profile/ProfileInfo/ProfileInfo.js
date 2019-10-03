import React, { useState } from 'react';
import bg from './../../../assets/images/profile-bg.jpg';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    let info = props.info;
    let [editMode, setEditMode] = useState(false);
    
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onProfileFormSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (<div className = {styles.profile}>
            <div className = {styles.profile__header}>
                <img src = {bg} alt=""/>
            </div>
            <div className = {styles.user__info}>
                <div className = {styles.user__photo}>
                    <img src={info.photos.large != null ? info.photos.large: userPhoto} alt="user-pic"/>
                    { props.isOwner ? <input type="file" onChange={ onMainPhotoSelected } /> : '' }
                </div>
                <div className = {styles.info}>
                    <h4 className= {styles.name}>{info.fullName}</h4>
                    <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} />
                </div>
            </div>
            { editMode 
                ? <ProfileDataForm profile = { info } initialValues={ info } onSubmit={ onProfileFormSubmit } />
                : <ProfileData { ...info } isOwner={props.isOwner} goToEditMode={ () =>  setEditMode(true) }/>
            }
        </div>);
}

export default ProfileInfo;