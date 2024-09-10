const ADD_USER = 'ADD-USER';
const UPDATE_USER = 'UPDATE-USER';

let initialState = {
    users: [
        { id: 1, name: 'Mike', surname: 'Walker' },
        { id: 2, name: 'John', surname: 'Deer' },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                // ...state,
                // newPostText: '',
                // posts: [...state.posts, {id: 3, message: messageText, likesCount: 0 }]
            };

        case UPDATE_USER:
            return {
                // ...state,
                // newPostText: action.newText
            };

        default:
            return state;
    }
}

// export const addPostCreator = () => ({ type: ADD_POST })

// export const updateNewPostTextCreator = (text) => {
//     return { type: UPDATE_NEW_POST_TEXT, newText: text }
// }

export default usersReducer;