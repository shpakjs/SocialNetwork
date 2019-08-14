import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import LoginContainer from './components/Login/LoginContainer';

function App(props) {
  return (
      <div className="app-wraper">
        <Navbar />
        <div className="app-wraper-content">
            <HeaderContainer />
            <Route path = '/profile:userId?' render ={ () => 
              <ProfileContainer/>
            }/>
            <Route path = '/dialogs' render ={ () => 
              <DialogsContainer/> 
            } />
            <Route path = '/users' component = { () => <UsersContainer/> } />
            <Route path = '/news' component = {News} />
            <Route path = '/music' component = {Music} />
            <Route path = '/settings' component = {Settings} />
            <Route path = '/login' component = { () => <LoginContainer/> } />
        </div>
      </div>
  );
}

export default App;
