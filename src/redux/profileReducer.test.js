import profileReducer, { addPostAC, deletePostAC } from "./profileReducer";
let state  = {
    posts: [
        { id: 1, author: 'Yuliia', date: '12.07.2019', body:'Hi'},
        { id: 2, author: 'Yuliia', date: '03.04.2019', body:'Hey'},
        { id: 3, author: 'Yuliia', date: '22.07.2019', body:'Ho'},
        { id: 4, author: 'Yuliia', date: '16.07.2019', body:'Hooray'},
    ],
    profileInfo: null,
    status: null,
    isFetching: false
}; // test data

it('length of posts should be incremented', () => {
    let action = addPostAC("I am test post text"); //action
    let newState = profileReducer(state, action); 
    //check if we have correct result
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    let action = addPostAC('I am test post text'); //action
    let newState = profileReducer(state, action); 
    //check if we have correct result
    expect(newState.posts[4].body).toBe('I am test post text');
});

it('length of posts should be decremented', () => {
    let action = deletePostAC(3);
    let newState = profileReducer(state, action); 
    //check if we have correct result
    expect(newState.posts.length).toBe(3);
});