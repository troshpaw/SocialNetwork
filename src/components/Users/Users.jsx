import styles from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={styles.usersPhoto}>
                        <img src={user.photoUrl} />
                    </div>
                    <div>
                        {user.fullName}
                    </div>
                    <div>
                        {user.status}
                    </div>
                    <div>
                        {user.location.country + ' ' + user.location.city}
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button>
                        }
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;