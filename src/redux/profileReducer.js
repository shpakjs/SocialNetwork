const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState  = {
    posts: [
        { id: '1', author: 'Yuliia', date: '12.07.2019', body:'Hi'},
        { id: '2', author: 'Yuliia', date: '03.04.2019', body:'Hey'},
        { id: '3', author: 'Yuliia', date: '22.07.2019', body:'Ho'},
        { id: '4', author: 'Yuliia', date: '16.07.2019', body:'Hooray'},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText:action.newText
            };
        default:
            return state;
    }
}
export const addPostCreator = () => ({ type: 'ADD-POST' });

export const updateNewPostTextCreator = (text) => 
    ({type: 'UPDATE-NEW-POST', newText: text });

export default profileReducer;