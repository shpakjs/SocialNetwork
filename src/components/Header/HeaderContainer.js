import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';

let mapStateToProps = (state) => {
    return {
        login: state.authPage.login,
        userId: state.authPage.userId,
        isAuth: state.authPage.isAuth,
    }
};

const HeaderContainer = connect(mapStateToProps, {})(Header);

export default HeaderContainer;
