import {dialogsAPI} from "../api/api";

const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SEND_MESSAGE = 'SEND-MESSAGE';
const GET_DIALOGS_SUCCESS = 'GET_DIALOGS_SUCCESS';
let initialState = {
    dialogs: [],
    messages: [
        { id: 1, author: 'Yuliia', time: '21:00', message:'Hi'},
        { id: 2, author: 'Anton', time: '07:00', message:'How r u'},
        { id: 3, author: 'Anton', time: '12:31', message:'fantastic and u?'},
        { id: 4, author: 'Yuliia', time: '12:47', message: 'want some pizza'},
        { id: 5, author: 'Anton', time: '21:55', message:'me too'},
    ],
    newMessageText: '',
    isFetching: false
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 2, 
                author: 'Yuliia', 
                time: '21:00', 
                message: action.messageText.newMessageBody
            };
            return {
                ...state,
                messages:[...state.messages, newMessage],
                newMessageText: ''
            };
        case GET_DIALOGS_SUCCESS: 
            return {
                ...state,
                dialogs: [...action.dialogs]
            }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default: 
            return state;
    }
}
export const sendMessageCreator = (messageText) => ({ type: SEND_MESSAGE , messageText: messageText});  

export const getDialogsSuccess = (dialogs) => ({ type:  GET_DIALOGS_SUCCESS , dialogs: dialogs});  

export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
//thunk creator
export const getDialogs = () => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await dialogsAPI.getDialogs();
    if(response.data.length > 0) {
        dispatch(getDialogsSuccess(response.data));
    }
    dispatch(toggleIsFetchingAC(false));
}

export default dialogsReducer;