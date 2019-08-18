import React from 'react';
import styles from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators/validators';

const LoginForm = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <div><Field placeholder={"Login"} 
            component={Input} 
            name="login"
            validate={requiredField}/></div>
        <div><Field placeholder={"Password"} 
            component={Input} 
            name="password"
            validate={requiredField}/></div>
        <div><Field type={"checkbox"} component={Input} name="rememberMe"/></div>
        <button>Login</button>
    </form>;
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div><LoginReduxForm onSubmit={onSubmit}/></div>

}
export default Login;