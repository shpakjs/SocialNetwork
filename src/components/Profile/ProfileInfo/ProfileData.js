import React from 'react';
import styles from './ProfileInfo.module.css';
import flash from '../../../assets/images/lightning.svg';
const ProfileData = (props) => {
    return (<div className={styles.profile__data}>
        { props.isOwner 
            && <button onClick={props.goToEditMode} className={styles.iconBtn} tip="Edit">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z" fill="#93A0AB"></path>
            </svg>
            </button>}
        <h4> Main info </h4>
        <div><span className={styles.field}><img src={flash} alt="flash"/>about me:</span><span className={styles.data}> {props.aboutMe}</span></div>
        <div><span className={styles.field}><img src={flash} alt="flash"/>skills:</span><span className={styles.data}> {props.lookingForAJobDescription}</span></div>
        <h4> Contacts </h4>
            <div><span className={styles.field}><img src={flash} alt="flash"/> github </span><span className={styles.data}>{props.contacts.github}</span></div>
            <div><span className={styles.field}><img src={flash} alt="flash"/> facebook </span><span className={styles.data}>{props.contacts.facebook}</span></div>
            <div><span className={styles.field}><img src={flash} alt="flash"/> instagram </span><span className={styles.data}>{props.contacts.instagram}</span></div>
            <div><span className={styles.field}><img src={flash} alt="flash"/> twitter </span><span className={styles.data}>{props.contacts.twitter}</span></div>
            <div><span className={styles.field}><img src={flash} alt="flash"/> youtube </span><span className={styles.data}>{props.contacts.youtube}</span></div>
            <div><span className={styles.field}><img src={flash} alt="flash"/> website </span><span className={styles.data}>{props.contacts.website}</span></div>
            <div><span className={styles.field}><img src={flash} alt="flash"/> main link </span><span className={styles.data}>{props.contacts.mainLink}</span></div>
    </div>);
}

export default ProfileData;