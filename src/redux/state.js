const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 10 },
                { id: 2, message: 'This is my first post!', likesCount: 15 }
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Alex' },
                { id: 4, name: 'Masha' },
                { id: 5, name: 'Victor' }
            ],
            messages: [
                { id: 1, message: 'Hello!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Bye-bye!' }
            ],
            newMessageText: 'MessageText'
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('CallSubscriber will be here')
    },

    getState() {
        return this._state;
    },

    subscrube(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {

            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {

            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {

            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);

        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const onMessageChangeActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default store;

// window.state = store.getState();