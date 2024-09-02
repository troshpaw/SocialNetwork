import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let updateMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs 
            sendMessage={sendMessage} 
            updateMessageBody={updateMessageBody} 
            dialogs={props.store.getState().dialogsPage.dialogs}
            messages={props.store.getState().dialogsPage.messages}
            newMessageBody={props.store.getState().dialogsPage.newMessageBody}
        />
    );
}

export default DialogsContainer;