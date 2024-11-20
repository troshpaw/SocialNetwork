import { createSelector } from "@reduxjs/toolkit";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector,
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
