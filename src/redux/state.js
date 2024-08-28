const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 10 },
                { id: 2, message: 'This is my first post!', likesCount: 15 }
            ],
            newPostText: ''
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
            newMessageBody: ''
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
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 3,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
    
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;

            case SEND_MESSAGE:
                let newMessage = {
                    id: 4,
                    message: this._state.dialogsPage.newMessageBody
                };
    
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageBody = '';
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.newBody;
                this._callSubscriber(this._state);
                break;
            default:
                break;
        }
    }
}

export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, newBody: body }
}

export default store;

window.store = store;