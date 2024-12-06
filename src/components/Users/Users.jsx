import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({ currentPage, onPageChanged, totalUsersCount,
    pageSize, folowingInProgress, follow, unfollow, users }) => {

    return (
        <div>
            <div>
                <Paginator currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                />
            </div>

            <div>
                {users.map(user =>
                    <User user={user}
                        key={user.id}
                        folowingInProgress={folowingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />
                )}
            </div>
        </div >
    )
}

export default Users;