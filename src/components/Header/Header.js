import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

let Header = (props) => {
        return (<div>
            { props.isAuth
            ? <button onClick={props.logout} >Logout</button>
            : <NavLink to="/login" >Login</NavLink>
            }
        </div>);
    
};

export default Header;