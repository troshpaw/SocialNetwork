import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);        
    }
}

export default store;

window.store = store;