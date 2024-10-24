import { usersAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'This is my first post!', likesCount: 15 }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let messageText = state.newPostText;

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 3, message: messageText, likesCount: 0 }]
            };

        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newText };

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        default:
            return state;
    }
}

// Actions creators:
export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

// Thunk creators:
export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export default profileReducer;