import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
}

// Actions creators:
export const initializedSuccess = () => ({ type: SET_INITIALIZED });

// Thunk creators:
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    // dispatch(somethingelse());
    // dispatch(somethingelse());

    promise.then(() => {
        dispatch(initializedSuccess());
    })

    // If there is more than one promise:
    // Promise.all([promise])
    //     .then(() => {
    //         dispatch(initializedSuccess());
    //     })
}

export default appReducer;