import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <NavLink 
            to = {path} 
            activeClassName = {styles.active} 
            className = {styles.dialog}>
            {props.name}
        </NavLink>
    );
}

export default DialogItem;