import {usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_STATUS = 'SET-STATUS';

let initialState  = {
    posts: [
        { id: '1', author: 'Yuliia', date: '12.07.2019', body:'Hi'},
        { id: '2', author: 'Yuliia', date: '03.04.2019', body:'Hey'},
        { id: '3', author: 'Yuliia', date: '22.07.2019', body:'Ho'},
        { id: '4', author: 'Yuliia', date: '16.07.2019', body:'Hooray'},
    ],
    newPostText: '',
    profileInfo: null,
    status: null,
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length+2,
                author: 'Masha',
                body: state.newPostText,
                date: '9.07.2019',
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST: {
            return {...state, newPostText:action.newText };
        }
        case SET_PROFILE_INFO: {
            return { ...state, profileInfo: action.profileInfo };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}
export const addPostAC = () => ({ type: ADD_POST });

export const updateNewPostTextAC = (text) => 
    ({type: UPDATE_NEW_POST, newText: text });

export const setProfileInfoAC = (profileInfo) => 
    ({type: SET_PROFILE_INFO, profileInfo: profileInfo });

export const toggleIsFetchingAC = (isFetching) => 
    ({type: TOGGLE_IS_FETCHING, isFetching});

export const setStatusAC = (status) => 
    ({type: SET_STATUS, status});

export const setStatus = (status) => { 
    return (dispatch) => {
            usersAPI.setStatus(status).then(data => {
                dispatch(setStatusAC(data));
        });
    }
}
//thunk creator
export const getStatus = (userId) => { 
    return (dispatch) => {
        usersAPI.getStatus(userId).then(data => {
            let statusText = data ? data: '';
            dispatch(setStatusAC(statusText));
        });
    }
}
//thunk creator
export const getProfile = (userId) => { 
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
            usersAPI.getUserProfile(userId).then(data => {
                dispatch(setProfileInfoAC(data));
                dispatch(toggleIsFetchingAC(false));
        });
    }
}


export default profileReducer;