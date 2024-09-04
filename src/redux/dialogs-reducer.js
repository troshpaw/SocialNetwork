const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 4, message: body }],
            };

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newBody
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, newBody: body }
}

export default dialogsReducer;