import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://i.pinimg.com/originals/1f/28/c6/1f28c68d2c35f389966b5a363b992d06.png',
                followed: false, fullName: 'Mike Walker', status: 'This is my status!',
                location: { city: 'Minsk', country: 'Balarus' }
            },
            {
                id: 2, photoUrl: 'https://i.pinimg.com/originals/1f/28/c6/1f28c68d2c35f389966b5a363b992d06.png',
                followed: true, fullName: 'John Jameson', status: 'This is my status!',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://i.pinimg.com/originals/1f/28/c6/1f28c68d2c35f389966b5a363b992d06.png',
                followed: false, fullName: 'Tony Stark', status: 'This is my status!',
                location: { city: 'New York', country: 'USA' }
            }
        ]);
    }

    return (
        <div>
            {props.users.map(user =>
                <div key={user.id}>
                    <div>
                        <div className={styles.usersPhoto}>
                            <img src={user.photoUrl} />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(user.id)}>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                        <div>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users;