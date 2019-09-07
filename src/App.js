import React from 'react';
import {Route, withRouter} from 'react-router-dom';
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
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import store from './redux/reduxStore';

class App extends React.Component {
  componentDidMount () {
      this.props.initialize();
  }

  render() {
    if(this.props.isInitialized) {
      return (<div className="app-wraper">
        <NavbarContainer />
        <div className="app-wraper-content">
            <Route path= '/profile:userId?' render ={ () => 
              <ProfileContainer/>
            }/>
            <Route path= '/dialogs' render ={ () => 
              <DialogsContainer/> 
            } />
            <Route path= '/users' component = { () => <UsersContainer/> } />
            <Route path= '/news' component = {News} />
            <Route path= '/music' component = {Music} />
            <Route path= '/settings' component = {Settings} />
            <Route path= '/login' component = { () => <LoginContainer/> } />
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