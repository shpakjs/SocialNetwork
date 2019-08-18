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
        default: 
            return state;
    }
}
export const sendMessageCreator = (messageText) => ({ type: 'SEND-MESSAGE' , messageText: messageText});    

export default dialogsReducer;