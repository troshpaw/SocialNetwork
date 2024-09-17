import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png';

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
                                    <img src={user.photos.small != null
                                        ? user.photos.small
                                        : userPhoto
                                    } />
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                        : <button onClick={() => { props.follow(user.id) }}>Follow</button>
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
            </div>
        )
    }
}

export default Users;