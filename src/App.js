import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import LoginContainer from './components/Login/LoginContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import store from './redux/reduxStore';
import { withSuspense } from './hoc/withSuspense';

//lazy loading
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer' ));
const UsersContainer = React.lazy( () => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount () {
      this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    }

    return (<div className="app-wraper">
      <NavbarContainer />
      <div className="app-wraper-content">
          <Route path= '/profile:userId?' render ={withSuspense(ProfileContainer)}/>
          <Route path= '/dialogs' render ={withSuspense(DialogsContainer)} />
          <Route path= '/users' component = {withSuspense(UsersContainer)}/>
          <Route path= '/news' component =  { <News />} />
          <Route path= '/music' component = { <Music /> } />
          <Route path= '/settings' component = { <Settings/> } />
          <Route path= '/login' component = {<LoginContainer/>} />
      </div>
    </div>)
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

let AppConatainer = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter)(App);

const MainApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
          <AppConatainer/>
        </Provider>
    </HashRouter>;
}

export default MainApp;