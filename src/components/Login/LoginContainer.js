import React from 'react';
import {connect} from 'react-redux';
import styles from './Login.module.css';
import {login} from '../../redux/authReducer';
import Login from './Login';

class LoginAPIComponent  extends React.Component {
    onLogin = (email, password, rememberMe) => {
        this.props.login(email, password, rememberMe);
    }
    render() {
        return( <div className={styles.loginForm}>
            <Login
                isAuth = {this.props.isAuth}
                onLogin = {this.onLogin}
        /></div>);
    }
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth
    }
};

const LoginContainer = connect(mapStateToProps, {
    login: login,
})(LoginAPIComponent);

export default LoginContainer;
