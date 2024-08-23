import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

    let newMessagelement = React.createRef();

    let addMessage = () => {
        let text = newMessagelement.current.value;
        console.log(text);
    }

    let onMessageChange = () => {
        let text = newMessagelement.current.value;
        props.newMessagelement(text);
        console.log(text);
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
                    <textarea onChange={onMessageChange} ref={newMessagelement} value={props /* встатвить значение */}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;