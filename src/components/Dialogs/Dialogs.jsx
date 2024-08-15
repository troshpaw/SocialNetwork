import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={styles.dialog}>{props.message}</div>
    );
}

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Victor' }
    ];

    let messages = [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Bye-bye!' }
    ];

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;