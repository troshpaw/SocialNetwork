import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, follow, unfollow, folowingInProgress }) => {
    return (
        <div>
            <div className={styles.userContainer}>
                <div className={styles.userInfo}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null
                                ? user.photos.small
                                : userPhoto
                            } />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={folowingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }
                            }>Unfollow</button>
                            : <button disabled={folowingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }
                            }>Follow</button>
                        }
                    </div>
                </div>
                <div className={styles.userDetails}>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>
                        <div>"user.location.country"</div>
                        <div>"user.location.city"</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;