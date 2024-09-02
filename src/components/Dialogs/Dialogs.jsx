import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => 
        <DialogItem name={dialog.name} id={dialog.id} />);
    
    let messagesElements = props.messages.map(m => 
        <Message message={m.message} />);

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea 
                            value={props.newMessageBody} 
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;