import React from 'react';
import {connect} from 'react-redux';
import {authMe} from '../../redux/authReducer';
import Login from './Login';

class LoginAPIComponent  extends React.Component {

    onLogin = () => {
        this.props.authMe();
    }
    
    render() {
        return( <Login
            isAuth = {this.props.isAuth}
            onLogin = {this.onLogin}
        />);
    }
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth
    }
};

const LoginContainer = connect(mapStateToProps, {
    authMe: authMe,
})(LoginAPIComponent);

export default LoginContainer;
