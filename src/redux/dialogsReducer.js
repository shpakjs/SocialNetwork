const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Julia' },
        { id: 2, name: 'Andrii' },
        { id: 3, name: 'Anton ' },
    ],
    messages: [
        { id: 1, author: 'Yuliia', time: '21:00', message:'Hi'},
        { id: 2, author: 'Anton', time: '07:00', message:'How r u'},
        { id: 3, author: 'Anton', time: '12:31', message:'fantastic and u?'},
        { id: 4, author: 'Yuliia', time: '12:47', message: 'want some pizza'},
        { id: 5, author: 'Anton', time: '21:55', message:'me too'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText:action.body
            };
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 2, 
                author: 'Yuliia', 
                time: '21:00', 
                message: state.newMessageText
            };
            return {
                ...state,
                messages:[...state.messages, newMessage],
                newMessageText: ''
            };
        default: 
            return state;
    }
}


export const updateNewMessageBodyCreator = (text) => 
    ({type: 'UPDATE-NEW-MESSAGE-BODY', body: text });

export const sendMessageCreator = () => ({ type: 'SEND-MESSAGE' });    

export default dialogsReducer;