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
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsIitems}>               
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Alex' id='3'/>
                <DialogItem name='Masha' id='4'/>
                <DialogItem name='Victor' id='5'/>
            </div>
            <div className={styles.messages}>
                <Message message='Hello!'/>
                <Message message='How are you?'/>
                <Message message='Bye-bye!'/>
            </div>
        </div>
    );
}

export default Dialogs;