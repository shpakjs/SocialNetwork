import { authMe } from "./authReducer";

const SET_INITIALIZED = "SET-INITIALIZED";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            debugger
            return {
                ...state,
                initialized: true
            };
        default: 
            return state;
    }
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED });    

export const initialize = () => (dispatch) => {
    dispatch(authMe())
    .then( () => dispatch(initializedSuccess()));
}

export default appReducer;