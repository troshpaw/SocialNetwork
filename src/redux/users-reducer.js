const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
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
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] };

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;