import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../../common/FormControls/FormControls';
import { requiredField } from '../../../utils/validators/validators';
const ProfileDataForm = (props) => {
    return (<div>
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

export default ProfileDataForm;