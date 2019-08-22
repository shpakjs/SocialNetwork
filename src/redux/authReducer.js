import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import { resolve } from "path";
const AUTH_ME = 'AUTH-ME';

let initialState = {
    isAuth: false,
    userId: null,
    email: null,
    login: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_ME:
            return {
                ...state,
                userId: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth,
            };
        default: 
            return state;
    }
}

export const authMeAC = (id, email, login, isAuth) => ({ type: AUTH_ME, id, email, login, isAuth });    
//thunk creator
export const authMe = () => (dispatch) => { 
    return authAPI.me().then(response => {
        if(response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(authMeAC(id, login, email, true));
        }
    })
}

export const login = (email,password, rememberMe = false) => (dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                let {userId, login, email} = response.data.data;
                dispatch(authMe(userId, login, email, true));
            } else {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error'
                dispatch(stopSubmit('login', {_error: errorMessage}));
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(authMeAC(null, null, null, false));
            }
        })
}

export default authReducer;