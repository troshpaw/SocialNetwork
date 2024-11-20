import { createSelector } from "@reduxjs/toolkit";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(user => true);
}

export const getUsersSuperSelector = createSelector(getUsers,
    (users) => {
        return users.filter(user => true);
    }
)

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetchin;
}

export const getFolowingInProgress = (state) => {
    return state.usersPage.folowingInProgress;
}
