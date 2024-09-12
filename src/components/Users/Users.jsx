import React from 'react';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png';

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                // this.props.setUsers(response.data.items);
                props.setUsers(response.data.items);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.props.users.map(user =>
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
                                    ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
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
}

export default Users;