const state = {
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
}

export let addPost = () => {

    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    // rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    // rerenderEntireTree(state);
}

export let addMessage = () => {

    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    // rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    // rerenderEntireTree(state);
}

export default state;