const ADD_USER = 'ADD-USER';
const UPDATE_USER = 'UPDATE-USER';

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Mike Walker', status: 'This is my status!', location: {city:'Minsk', country: 'Balarus' }},
        { id: 2, followed: true, fullName: 'John Jameson', status: 'This is my status!', location: {city:'Moscow', country: 'Russia' }},
        { id: 3, followed: false, fullName: 'Tony Stark', status: 'This is my status!', location: {city:'New York', country: 'USA' }}
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