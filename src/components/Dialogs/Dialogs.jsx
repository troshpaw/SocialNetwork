import React from 'react';
import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import { reduxForm, Field } from 'redux-form';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newMessageText"} component={"input"} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = props.messages.map(m =>
        <Message message={m.message} key={m.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    };

    if (!props.isAuth) return <Navigate to='/login' />

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>

                <AddMessageFormRedux onSubmit={addNewMessage} />

            </div>
        </div>
    );
}

export default Dialogs;