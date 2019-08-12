import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: { 
        profilePage: {
            posts: [
                { id: '1', author: 'Yuliia', date: '12.07.2019', body:'Hi'},
                { id: '2', author: 'Yuliia', date: '03.04.2019', body:'Hey'},
                { id: '3', author: 'Yuliia', date: '22.07.2019', body:'Ho'},
                { id: '4', author: 'Yuliia', date: '16.07.2019', body:'Hooray'},
            ],
            newPostText: ''
        }, 
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _subscriber(){
        console.log('I have no observers');
    },
    setState(value) {
        this._state = value;
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._subscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.usersPage = usersReducer(this._state.usersPage, action);
        this._subscriber(this._state);
    }
};

export default store;