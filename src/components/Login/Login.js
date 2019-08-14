import React from 'react';
import styles from './Login.module.css';

let Login = (props) => {
    return (<button onClick={() => {props.onLogin()} }>Login Me</button>);
    
};

export default Login;