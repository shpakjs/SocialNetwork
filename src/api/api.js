import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true, 
    crossDomain: true,
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
    async toggleFollowingUser(userId, isFollow) {
        let response = isFollow 
            ? await instance.delete(`follow/${userId}`) 
            : await instance.post(`follow/${userId}`)
        return response.data;
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
                return response.data
            });
    },
    login(email, password, remeberMe = false) {
        return instance.post(`auth/login`, {email, password, remeberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}