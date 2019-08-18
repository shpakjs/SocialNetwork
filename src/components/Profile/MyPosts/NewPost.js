import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from './MyPosts.module.css';
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength30 = maxLengthCreator(30);

const NewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
            <Field 
                rows="10" 
                name="newPostbody" 
                placeholder="Enter your genious thoughts" 
                component={Textarea}
                validate={[requiredField, maxLength30]}/>
            <button>Add post</button>
    </form>;
}
const NewPostRedaxForm = reduxForm({form: 'newPostForm'})(NewPostForm);

const NewPost = (props) => {
    const onPostSubmit = (formData) => {
        props.addPost(formData);
    }
    return <div className = {styles.add__post}><NewPostRedaxForm onSubmit={onPostSubmit}/></div>
}

export default NewPost;