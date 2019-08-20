import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true, 
    headers: {
        "API-KEY": '77a146e4-229d-496d-9655-f77f4dafa8d8'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        });
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        });
    },
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => {
            return response.data
        });
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status})
        .then(response => {
            return response.data
        });
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        });
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data.data
            });
    },
    login(email, password, remeberMe = false) {
        debugger;
        return instance.post(`auth/login`, {email, password, remeberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}