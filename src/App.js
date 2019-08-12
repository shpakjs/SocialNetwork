import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
      <div className="app-wraper">
        <Navbar />
        <div className="app-wraper-content">
            <Route path = '/profile' render ={ () => 
              <Profile/>
            }/>
            <Route path = '/dialogs' render ={ () => 
              <DialogsContainer/> 
            } />
            <Route path = '/users' component = { () => <UsersContainer/> } />
            <Route path = '/news' component = {News} />
            <Route path = '/music' component = {Music} />
            <Route path = '/settings' component = {Settings} />
        </div>
      </div>
  );
}

export default App;
