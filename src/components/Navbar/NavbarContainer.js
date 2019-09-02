import React from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../redux/authReducer';


class NavbarContainer extends React.Component {
    render() {
        return  this.props.isAuth ? <Navbar {...this.props} />: <></>;
    }
};
let mapStateToProps = (state) => {
    return {
        login: state.authPage.login,
        userId: state.authPage.userId,
        isAuth: state.authPage.isAuth,
    }
};

export default connect(mapStateToProps, {logout})(NavbarContainer);


