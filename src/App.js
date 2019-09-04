import React from 'react';
import {HashRouter, withRouter} from 'react-router-dom';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initialize } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount () {
      this.props.initialize();
  }

  render() {
    if(this.props.isInitialized) {
      return (<div className="app-wraper">
        <NavbarContainer />
        <div className="app-wraper-content">
            <HashRouter basename= '/profile:userId?' render ={ () => 
              <ProfileContainer/>
            }/>
            <HashRouter basename= '/dialogs' render ={ () => 
              <DialogsContainer/> 
            } />
            <HashRouter basename= '/users' component = { () => <UsersContainer/> } />
            <HashRouter basename= '/news' component = {News} />
            <HashRouter basename= '/music' component = {Music} />
            <HashRouter basename= '/settings' component = {Settings} />
            <HashRouter basename= '/login' component = { () => <LoginContainer/> } />
        </div>
      </div>)
    } else { return <Preloader /> }
  }
}
const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.initialized
  }
}
export default compose(
    connect(mapStateToProps, {initialize}),
    withRouter)(App);
