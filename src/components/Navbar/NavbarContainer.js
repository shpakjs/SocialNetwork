import React from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../redux/authReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(connect(mapStateToProps, {logout}), withAuthRedirect )(NavbarContainer);
