import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReducer";
import thunkMiddlewear from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddlewear));

export default store;