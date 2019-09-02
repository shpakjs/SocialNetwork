import React from 'react';
import styles from './Login.module.css';
import bg from '../../assets/images/login.jpg';
import {reduxForm, Field} from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';
const LoginForm = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <h4>Login</h4>
        <div><Field placeholder={"Login"} 
            component={Input} 
            name="login"
            validate={requiredField}/></div>
        <div><Field placeholder={"Password"} 
            component={Input} 
            name="password"
            type="password"
            validate={requiredField}/></div>
            { props.error ? <div className={styles.summaryError}>{props.error}</div> : ''}
        <div><Field type="checkbox" component="input" name="rememberMe"/>remember me</div>
        <button>Login</button>
    </form>;
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.onLogin(formData.login, formData.password, formData.rememberMe);
    }
    if(props.isAuth) return <Redirect to={"/profile"} />
    return <div className={styles.login} style={{backgroundImage: `url(${bg})`}}><LoginReduxForm onSubmit={onSubmit}/></div>

}
export default Login;