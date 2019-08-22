import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

let initialState  = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = state.users.map((user) => {
                if(user.id === action.userId) {
                    return {...user, followed: true};
                }
                else {
                    return {...user};
                }
            });
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = state.users.map((user) => {
                if(user.id === action.userId) {
                    return {...user, followed: false};
                }
                else {
                    return {...user};
                }
            });
            return stateCopy;
        }
        case SET_USERS: {
            return { ...state, users: [...action.users], currentPage: action.currentPage, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            if(state.followingInProgress.includes(action.followingInProgress)) {
                let filteredArr = state.followingInProgress.filter(function(value){
                    return value !== action.followingInProgress;
                });
                return { ...state, followingInProgress: [...filteredArr]}
            }
            else{
                return { ...state, followingInProgress: [...state.followingInProgress, action.followingInProgress]}
            }
            
        }
        default:
            return state;
    }
}
export const followAC = (userId) => ({ type: FOLLOW , userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users, currentPage, totalUsersCount) => 
    ({type: SET_USERS, users, currentPage,  totalUsersCount});
    
export const toggleIsFetchingAC = (isFetching) => 
    ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgressAC = (followingInProgress) => 
    ({type: TOGGLE_FOLLOWING_PROGRESS, followingInProgress});


//thunk creator
export const requestUsers = (currentPage, pageSize) => { 
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data.items, currentPage, data.totalCount));
            dispatch(toggleIsFetchingAC(false));
        });
    }
}

export const follow = (userId) => { 
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(userId));
        usersAPI.followUser(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(followAC(userId));
                dispatch(toggleFollowingProgressAC(userId));
            }
        });
    }
}

export const unfollow = (userId) => { 
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(userId));
        usersAPI.unfollowUser(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(unfollowAC(userId));
                dispatch(toggleFollowingProgressAC(userId));
            }
        });
    }
}

export default usersReducer;