import React from 'react';
import {reduxForm, Field} from 'redux-form';
import styles from './Dialogs.module.css';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormControls';

const maxLength100 = maxLengthCreator(100);

const NewMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field 
            component={Textarea}
            name="body" 
            placeholder="Enter whatever you want to say" 
            validate={[requiredField, maxLength100]}
        />
        <button>Send</button>
    </form>;

}
const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm);

const NewMessage = (props) => {
    const onSubmitMessage = (formData) => {
        props.sendMessage(props.dialogId, formData);
    }
    return <div className={ styles.new__message }><NewMessageReduxForm onSubmit={onSubmitMessage} dialogId={props.dialogId}/></div>
}

export default NewMessage;