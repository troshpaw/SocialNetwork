import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/validators/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    folowingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return { ...user, followed: true }
                //     }
                //     return user;
                // })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return { ...user, followed: false }
                //     }
                //     return user;
                // })
            };

        case SET_USERS:
            // return { ...state, users: [...state.users, ...action.users] };
            return { ...state, users: [...action.users] };

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.usersCount };

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                folowingInProgress: action.isFetching
                    ? [...state.folowingInProgress, action.userId]
                    : state.folowingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
}

// Actions creators:
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFolowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

// Thunk creators:
export const requestUsers = (pageSize, page) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let response = await usersAPI.getUsers(pageSize, page);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFolowingProgress(true, userId));

    let response = await apiMethod(userId);

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(toggleIsFolowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.unfollow.bind(usersAPI);
        // let actionCreator = unfollowSuccess;

        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.unfollow.bind(usersAPI);
        // let actionCreator = unfollowSuccess;

        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;