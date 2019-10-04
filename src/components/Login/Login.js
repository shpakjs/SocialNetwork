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
        { error && <div className={styles.summaryError}>{ error }</div> }
        { captchaUrl && 
            <div>
                <img src={captchaUrl} className={styles.captcha} alt="captcha"/>
                { createField("enter symbols from picture", "captcha", requiredField, Input, null, {}) }
            </div>  
        }
        <button>Login</button>

    </form>;
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.onLogin(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }
    if(props.isAuth) return <Redirect to={"/profile"} />
    return <div className={styles.login} style={{backgroundImage: `url(${bg})`}}><LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/></div>

}
export default Login;