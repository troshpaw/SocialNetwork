const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 10 },
            { id: 2, message: 'This is my first post!', likesCount: 15 }
        ]
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
        ]
    }
};

export const addPost = (message) => {

    const post = {
        id: 3,
        message: message,
        likesCount: 0
    };

    state.profilePage.posts.push(post);
};

export default state;