import React from 'react';
import bg from './../../../profile-bg.jpg';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className = {styles.profile}>
            <div className = {styles.profile__header}>
                <img src = {bg} alt=""/>
            </div>
            <div className = {styles.user__info}>
                <div className = {styles.user__photo}>
                    <img src="https://i.pinimg.com/564x/68/24/9f/68249f6646dc1bb6c87de69edb692974.jpg" alt=""/>
                </div>
                <div className = {styles.info}>
                    <h4 className= {styles.name}>User Name</h4>
                    <div className= {styles.info__item}>Kyiv, Ukraine</div>
                    <div className= {styles.info__item}>24 y.o.</div>
                    <div className= {styles.info__item}>31.01.1995</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;