import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsIitems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2'>Sveta</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/3'>Dmitriy</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/4'>Masha</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/5'>Victor</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hello!</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Bye-bye!</div>
            </div>
        </div>
    );
}

export default Dialogs;