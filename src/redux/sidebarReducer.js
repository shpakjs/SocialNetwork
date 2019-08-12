
const sidebarReducer = (state = {}, action) => {
    switch(action.type) {
        case 'sidebar': 
            return state;
        default:
            return state;
    }
}

export default sidebarReducer;