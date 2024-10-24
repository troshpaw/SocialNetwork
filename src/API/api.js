import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5fecb391-77e3-4aa5-967c-e7b1ceb9c36f'
    }
})

export const usersAPI = {
    getUsers(pageSize, pageNumber) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    }
};

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
};