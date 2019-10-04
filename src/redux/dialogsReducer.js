import {dialogsAPI} from "../api/api";

const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
const GET_DIALOGS_SUCCESS = 'GET_DIALOGS_SUCCESS';
const GET_DIALOG_MESSAGES_SUCCESS = 'GET_DIALOG_MESSAGES_SUCCESS';
let initialState = {
    dialogs: [],
    messages: [],
    newMessageText: '',
    isFetching: false,
    activeDialog: null
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE_SUCCESS:
            debugger;
            return {
                ...state,
                messages:[...state.messages],
                newMessageText: ''
            };
        case GET_DIALOGS_SUCCESS: 
            return {
                ...state,
                dialogs: [...action.dialogs]
            }
        case GET_DIALOG_MESSAGES_SUCCESS: 
            return {
                ...state,
                messages : [...action.messages],
                activeDialog: action.dialogId

            }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default: 
            return state;
    }
}
export const sendMessageSuccess = (messageText) => ({ type: SEND_MESSAGE_SUCCESS , messageText: messageText});  

export const getDialogsSuccess = (dialogs) => ({ type:  GET_DIALOGS_SUCCESS , dialogs: dialogs});  

export const getDialogMessagesSuccess = (messages, dialogId) => ({ type:  GET_DIALOG_MESSAGES_SUCCESS , messages: messages, dialogId: dialogId});  

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

export const getDialogMessages = (userId) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await dialogsAPI.getDialogMessages(userId);
    dispatch(getDialogMessagesSuccess(response.data.items, userId));
    dispatch(toggleIsFetchingAC(false));
}

export const sendMessage = (userId, body) => async (dispatch) => {
    let response = await dialogsAPI.sendMessage(userId, body);
    if(response.data.resultCode === 0) {
        dispatch(getDialogMessages(userId));
    }
}
export default dialogsReducer;