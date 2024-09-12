import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png';

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {props.users.map(user =>
                <div key={user.id} className={styles.userContainer}>
                    <div className={styles.userInfo}>
                        <div>
                            <img src={user.photos.small != null
                                ? user.photos.small
                                : userPhoto
                            } />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(user.id)}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={styles.userDetails}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>
                            <div>"user.location.country"</div>
                            <div>"user.location.city"</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users;