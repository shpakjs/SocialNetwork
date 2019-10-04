import {dialogsAPI} from "../api/api";
import {change} from 'redux-form';

const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const GET_DIALOGS_SUCCESS = 'GET_DIALOGS_SUCCESS';
const GET_DIALOG_MESSAGES_SUCCESS = 'GET_DIALOG_MESSAGES_SUCCESS';
const SELECT_MESSAGE = 'SELECT_MESSAGE';
const CLEAR_SELECTED_MESSAGES = 'CLEAR_SELECTED_MESSAGES';
let initialState = {
    dialogs: [],
    messages: [],
    selectedMessages: [],
    isFetching: false,
    activeDialog: null
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
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
        case SELECT_MESSAGE: 
            let selectedItems = [];
            //first check if we have to select or deselect message
            if (state.selectedMessages.includes(action.messageId)) {
                selectedItems = state.selectedMessages.filter(item => item !== action.messageId );
            } else {
                selectedItems = [...state.selectedMessages, action.messageId];
            }
            return {
                ...state,
                selectedMessages: selectedItems
            }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case CLEAR_SELECTED_MESSAGES: {
            return { ...state, selectedMessages: []}
        }
        default: 
            return state;
    }
}
export const getDialogsSuccess = (dialogs) => ({ type:  GET_DIALOGS_SUCCESS , dialogs: dialogs});  

export const selectMessage = (messageId) => ({ type: SELECT_MESSAGE , messageId: messageId}); 

export const clearSelectedMessages = () => ({ type: CLEAR_SELECTED_MESSAGES }); 

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
    dispatch(clearSelectedMessages());
    dispatch(getDialogMessagesSuccess(response.data.items, userId));
    dispatch(toggleIsFetchingAC(false));
}

export const sendMessage = (userId, body) => async (dispatch) => {
    let response = await dialogsAPI.sendMessage(userId, body);
    if(response.data.resultCode === 0) {
        dispatch(change('newMessage', 'body', null));
        dispatch(getDialogMessages(userId));
    }
}
export const removeMessage = (messageId, dialogId) => async (dispatch) => {
    let response = await dialogsAPI.removeMessage(messageId);
    if(response.data.resultCode === 0) {
        dispatch(clearSelectedMessages());
        dispatch(getDialogMessages(dialogId));
    }
}
export const spamMessage = (messageId, dialogId) => async (dispatch) => {
    let response = await dialogsAPI.putToSpamMessage(messageId);
    if(response.data.resultCode === 0) {
        dispatch(clearSelectedMessages());
        dispatch(getDialogMessages(dialogId));
    }
}

export default dialogsReducer;