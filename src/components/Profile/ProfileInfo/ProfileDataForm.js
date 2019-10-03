import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField, Textarea } from '../../common/FormControls/FormControls';
import { requiredField } from '../../../utils/validators/validators';

const ProfileDataForm = ({handleSubmit, error}) => {
    return (<form onSubmit={ handleSubmit }>
            <div><button >Save</button></div>
            { error && <div>{ error }</div> }
            <h4>Main info</h4>
            { createField("enter your full name", "fullName", requiredField, Input, null, {}) }
            { createField("", "LookingForAJob", null, "input", "You are looking for a job?", {type:"checkbox"}) }
            { createField("enter your skills", "LookingForAJobDescription", null, Textarea, null, {}) }
            { createField("enter something about you", "aboutMe", null, Textarea, null, {}) }

            <h4>Contact info</h4>
            { createField("enter github url", "contacts.github", null, Input, null, {}) }
            { createField("enter facebook", "contacts.facebook", null, Input, null, {}) }
            { createField("enter instagram", "contacts.instagram", null, Input, null, {}) }
            { createField("enter twitter", "contacts.twitter", null, Input, null, {}) }
            { createField("enter youtube", "contacts.youtube", null, Input, null, {}) }
            { createField("enter website", "contacts.website", null, Input, null, {}) }
            { createField("enter mainLink", "contacts.mainLink", null, Input, null, {}) }
    </form>);
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;