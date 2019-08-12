const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState  = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return { ...state, users: [ ...state.users, ...action.users], totalUsersCount: action.totalUsersCount }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, users: [...action.users], currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}
export const followAC = (userId) => ({ type: FOLLOW , userId});

export const unfollowAC = (userId) => 
    ({type: UNFOLLOW, userId});

export const setUsersAC = (users, totalUsersCount) => 
    ({type: SET_USERS, users, totalUsersCount});

export const setCurrentPageAC = (currentPage, users) => 
    ({type: SET_CURRENT_PAGE, currentPage, users});
    
export const toggleIsFetchingAC = (isFetching) => 
    ({type: TOGGLE_IS_FETCHING, isFetching});

    
export default usersReducer;