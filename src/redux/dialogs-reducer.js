const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: action.newMessageText }],
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;