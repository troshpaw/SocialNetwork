import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
// import { usersAPI } from '../../API/api';

const Users = (props) => {
    let pages = [];
    let totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    if (totalPagesCount !== 0) {

        if (props.currentPage <= 5) {
            for (let i = 1; i < 10; i++) {
                pages.push(i);
            }
        }
        else if ((props.currentPage > 5) && (props.currentPage <= totalPagesCount - 4)) {
            for (let i = props.currentPage - 4; i < props.currentPage + 5; i++) {
                pages.push(i);
            }
        }
        else if (props.currentPage > totalPagesCount - 5) {
            for (let i = totalPagesCount - 8; i <= totalPagesCount; i++) {
                pages.push(i);
            }
        }

        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span
                            className={page === props.currentPage ? styles.currentPage : undefined}
                            onClick={(event) => {
                                props.onPageChanged(page)
                            }}>
                            &nbsp;{page}&nbsp;
                        </span>
                    })}
                </div>
                <div>
                    {props.users.map(user =>
                        <div key={user.id} className={styles.userContainer}>
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
                                        ? <button disabled={props.folowingInProgress.some(id => id === user.id)} onClick={() => {
                                            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            //     withCredentials: true,
                                            //     headers: { 'API-KEY': '5fecb391-77e3-4aa5-967c-e7b1ceb9c36f' }
                                            // })
                                            
                                            // props.toggleIsFolowingProgress(true, user.id);
                                            // usersAPI.unfollow(user.id)
                                            //     .then(data => {
                                            //         if (data.resultCode === 0) {
                                            //             props.unfollow(user.id)
                                            //         }
                                            //         props.toggleIsFolowingProgress(false, user.id);
                                            //     })

                                            props.unfollow(user.id);
                                        }
                                        }>Unfollow</button>
                                        : <button disabled={props.folowingInProgress.some(id => id === user.id)} onClick={() => {
                                            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            //     withCredentials: true,
                                            //     headers: { 'API-KEY': '5fecb391-77e3-4aa5-967c-e7b1ceb9c36f' }
                                            // })
                                            
                                            // props.toggleIsFolowingProgress(true, user.id);
                                            // usersAPI.follow(user.id)
                                            //     .then(data => {
                                            //         if (data.resultCode === 0) {
                                            //             props.follow(user.id)
                                            //         }
                                            //         props.toggleIsFolowingProgress(false, user.id);
                                            //     })

                                            props.follow(user.id);
                                        }
                                        }>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={styles.userDetails}>
                                <div>{user.name}</div>
                                <div>{user.id}</div>
                                <div>
                                    <div>"user.location.country"</div>
                                    <div>"user.location.city"</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        )
    }
}

export default Users;