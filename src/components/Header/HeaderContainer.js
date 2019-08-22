import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        login: state.authPage.login,
        userId: state.authPage.userId,
        isAuth: state.authPage.isAuth,
    }
};

export default connect(mapStateToProps, {logout})(HeaderContainer);


