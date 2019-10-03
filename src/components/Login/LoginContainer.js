import React from 'react';
import {connect} from 'react-redux';
import styles from './Login.module.css';
import {login} from '../../redux/authReducer';
import Login from './Login';

class LoginAPIComponent  extends React.Component {
    onLogin = (email, password, rememberMe, captcha) => {
        this.props.login(email, password, rememberMe, captcha);
    }
    render() {
        return( <div className={styles.loginForm}>
            <Login
                isAuth = {this.props.isAuth}
                captchaUrl = {this.props.captchaUrl}
                onLogin = {this.onLogin}
        /></div>);
    }
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        captchaUrl : state.authPage.captchaUrl
    }
};

const LoginContainer = connect(mapStateToProps, {
    login: login,
})(LoginAPIComponent);

export default LoginContainer;
