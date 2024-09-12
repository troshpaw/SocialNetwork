const Users = (props) => {
    return (
        <div>
            {
                props.users.map(user => user)
            }
        </div>
    )
}

export default Users;