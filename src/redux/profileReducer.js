import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_STATUS = 'SET-STATUS';
const SET_PHOTO = 'SET-PHOTO';
const DELETE_POST = 'DELETE-POST';

let initialState  = {
    posts: [
        { id: 1, author: 'shpakjs', date: '7/13/2019', body:'Hi'},
        { id: 2, author: 'shpakjs', date: '7/11/2019', body:'Hey'},
        { id: 3, author: 'shpakjs', date: '6/20/2019', body:'Ho'},
        { id: 4, author: 'shpakjs', date: '7/17/2019', body:'Hooray'},
    ],
    profileInfo: null,
    status: null,
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length+2,
                author: state.profileInfo.fullName,
                body: action.newPostText,
                date: (new Date()).toLocaleDateString('en-us'),
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case DELETE_POST: {
            return {...state,
                posts: state.posts.filter(item => item.id !== action.postId)};
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
        case SET_PHOTO: {
            return { ...state,  profileInfo: { ...state.profileInfo, photos: action.photo } }
        }
        default:
            return state;
    }
}
export const addPostAC = (newPostText) => ({ type: ADD_POST , newPostText: newPostText});

export const deletePostAC = (postId) => ({ type: DELETE_POST , postId: postId});

export const setProfileInfoAC = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo: profileInfo });

export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const setStatusAC = (status) => ({type: SET_STATUS, status});

export const setPhotoAC = (photo) => ({type: SET_PHOTO, photo});

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.setStatus(status);
    if(response.data.resultCode === 0){
        dispatch(setStatusAC(status));
    }
}
//thunk creator
export const getStatus = (userId) => async(dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(response));
}

//thunk creator
export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photo);
    if(response.resultCode === 0) {
        dispatch(setPhotoAC(response.data.photos));
    }
}
//thunk creator
export const getProfile = (userId) => async(dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await profileAPI.getUserProfile(userId);    
    dispatch(setProfileInfoAC(response));
    dispatch(toggleIsFetchingAC(false));
}

//thunk creator
export const saveProfile = (formData) => async(dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await profileAPI.saveUserProfile(formData);  
    if(response.resultCode === 0) {
        //getProfile(userId);
    }
}

export default profileReducer;