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
    getUserProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
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
