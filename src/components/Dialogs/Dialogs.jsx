import styles from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsIitems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    Dimych
                </div>
                <div className={styles.dialog}>
                    Sveta
                </div>
                <div className={styles.dialog}>
                    Dmitriy
                </div>
                <div className={styles.dialog}>
                    Masha
                </div>
                <div className={styles.dialog}>
                    Victor
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