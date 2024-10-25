// import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

// const DialogsContainer = (props) => {

//     let sendMessage = () => {
//         props.store.dispatch(sendMessageCreator());
//     }

//     let updateMessageBody = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body));
//     }

//     return (
//         <Dialogs
//             sendMessage={sendMessage}
//             updateMessageBody={updateMessageBody}
//             dialogs={props.store.getState().dialogsPage.dialogs}
//             messages={props.store.getState().dialogsPage.messages}
//             newMessageBody={props.store.getState().dialogsPage.newMessageBody}
//         />
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },

        updateMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs);