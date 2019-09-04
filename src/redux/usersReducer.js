import {usersAPI} from '../api/api';
const TOGGLE_FOLLOW = 'FOLLOW';
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
        case TOGGLE_FOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = state.users.map((user) => {
                if(user.id === action.userId) {
                    return {...user, followed: !user.followed};
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
export const toggleFollowingAC = (userId) => ({ type: TOGGLE_FOLLOW , userId});

export const setUsersAC = (users, currentPage, totalUsersCount) => 
    ({type: SET_USERS, users, currentPage,  totalUsersCount});
    
export const toggleIsFetchingAC = (isFetching) => 
    ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgressAC = (followingInProgress) => 
    ({type: TOGGLE_FOLLOWING_PROGRESS, followingInProgress});

//thunk creator
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsersAC(response.items, currentPage, response.totalCount));
    dispatch(toggleIsFetchingAC(false));
}

export const toggleFollowing = (userId , isFollowing) => async (dispatch) => {
    dispatch(toggleFollowingProgressAC(userId));
    let response = await usersAPI.toggleFollowingUser(userId, isFollowing);
    if(response.resultCode === 0) {
        dispatch(toggleFollowingAC(userId));
        dispatch(toggleFollowingProgressAC(userId));
    }
}

export default usersReducer;