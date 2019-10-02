import React from 'react';

const ProfileData = (props) => {
    return (<div>
        { props.isOwner && <button onClick={props.goToEditMode} >Edit</button> }
        <div>Full name: {props.github}</div>
        Contacts
            <div>+ github: {props.github}</div>
            <div>+ facebook: {props.facebook}</div>
            <div>+ instagram: {props.instagram}</div>
            <div>+ twitter: {props.twitter}</div>
            <div>+ youtube: {props.youtube}</div>
            <div>+ website: {props.website}</div>
            <div>+ main link: {props.mainLink}</div>
    </div>);
}

export default ProfileData;