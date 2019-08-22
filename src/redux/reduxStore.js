import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddlewear from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    authPage: authReducer,
    form: formReducer,
    app: appReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddlewear));
window.store = store;
export default store;