const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';

let initialState  = {
    posts: [
        { id: '1', author: 'Yuliia', date: '12.07.2019', body:'Hi'},
        { id: '2', author: 'Yuliia', date: '03.04.2019', body:'Hey'},
        { id: '3', author: 'Yuliia', date: '22.07.2019', body:'Ho'},
        { id: '4', author: 'Yuliia', date: '16.07.2019', body:'Hooray'},
    ],
    newPostText: '',
    profileInfo: null,
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

export default profileReducer;