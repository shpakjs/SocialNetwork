import React from 'react';
import styles from './Login.module.css';
import bg from '../../assets/images/login.jpg';
import {reduxForm} from 'redux-form';
import { Input, createField } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit = {handleSubmit}>
        <h4>Login</h4>
        { createField("Email", "login", requiredField, Input, null, {}) }
        { createField("Password", "password", requiredField, Input, null, {type:"password"}) }
        { createField("Remember me", "rememberMe", null, "input", "remember me", {type:"checkbox"}) }
        <button>Login</button>
        { captchaUrl && 
            <div>
                <img src={captchaUrl} />
                { createField("enter symbols from picture", "captcha", requiredField, Input, null, {}) }
            </div>  }
    </form>;
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger;
        props.onLogin(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }
    if(props.isAuth) return <Redirect to={"/profile"} />
    return <div className={styles.login} style={{backgroundImage: `url(${bg})`}}><LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/></div>

}
export default Login;