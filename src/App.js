import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initialize } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import store from './redux/reduxStore';
import { withSuspense } from './hoc/withSuspense';
//lazy loading
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer' ));
const News = React.lazy( () => import('./components/News/News') );
const Music = React.lazy( () => import('./components/Music/Music') );
const Settings = React.lazy( () => import('./components/Settings/Settings'));
const UsersContainer = React.lazy( () => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount () {
      this.props.initialize();
  }

  render() {
    if(this.props.isInitialized) {
      return (<div className="app-wraper">
        <NavbarContainer />
        <div className="app-wraper-content">
            <Route path= '/profile:userId?' render ={withSuspense(ProfileContainer)}/>
            <Route path= '/dialogs' render ={withSuspense(DialogsContainer)} />
            <Route path= '/users' component = {withSuspense(UsersContainer)}/>
            <Route path= '/news' component =  {withSuspense(News)} />
            <Route path= '/music' component = {withSuspense(Music)} />
            <Route path= '/settings' component = {withSuspense(Settings)} />
            <Route path= '/login' component = {<LoginContainer/>} />
        </div>
      </div>)
    } else { return <Preloader /> }
  }
}
const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.initialized,
    isAuthorized: state.authPage.isAuth
  }
}

let AppConatainer = compose(
    connect(mapStateToProps, {initialize}),
    withRouter)(App);

const MainApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
          <AppConatainer/>
        </Provider>
    </HashRouter>;
}

export default MainApp;