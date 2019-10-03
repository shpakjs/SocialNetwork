import React from 'react';

const ProfileData = (props) => {
    return (<div>
        { props.isOwner && <button onClick={props.goToEditMode} >Edit</button> }
        <div>Full name: {props.fullName}</div>
        <div>Skills: {props.LookingForAJobDescription}</div>
        <div>About me: {props.aboutMe}</div>
        Contacts
            <div>+ github: {props.contacts.github}</div>
            <div>+ facebook: {props.contacts.facebook}</div>
            <div>+ instagram: {props.contacts.instagram}</div>
            <div>+ twitter: {props.contacts.twitter}</div>
            <div>+ youtube: {props.contacts.youtube}</div>
            <div>+ website: {props.contacts.website}</div>
            <div>+ main link: {props.contacts.mainLink}</div>
    </div>);
}

export default ProfileData;