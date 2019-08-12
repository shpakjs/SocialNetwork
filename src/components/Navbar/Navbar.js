import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './../../puzzle.svg'

const Navbar = () => {
    return (
        <div className = {styles.nav__wrapper}> 
            <img src={logo} className={styles.logo} alt=""/>
            <nav className = {styles.nav}>
                <div className ={`${styles.item} ${styles.active}`}>
                    <NavLink to="/profile" activeClassName = {styles.active}>Profile</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to="/dialogs" activeClassName = {styles.active}>Messages</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to="/news" activeClassName = {styles.active}>News</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to="/music" activeClassName = {styles.active}>Music</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to="/settings" activeClassName = {styles.active}>Settings</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to="/users" activeClassName = {styles.active}>Users</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;