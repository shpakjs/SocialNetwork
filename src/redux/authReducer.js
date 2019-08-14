import { authAPI } from "../api/api";

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
                isAuth: true,
                userId: action.userId,
                email: action.email,
                login: action.login
            };
        default: 
            return state;
    }
}

export const authMeAC = (data) => ({ type: AUTH_ME, userId: data.id, email: data.email, login: data.login });    
//thunk creator
export const authMe = () => {
    return (dispatch) => { 
            authAPI.me().then(data => {
                dispatch(authMeAC(data));
        });
    }
}
export default authReducer;