import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'}
});

 export const useraAPI = {
     getUsers(currentPage = 1, pageSize = 10)  {
         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
             .then(response => {
                 return response.data;
             });
     },

     follow(userId) {
         return instance.post('follow/${userId}')
             .then(responce => {
                 return responce.data
             })
     },

     unfollow(userId) {
         return instance.delete('follow/${userId}')
             .then(responce => {
                 return responce.data
             })
     },

     delUser(id) {
         return instance.delete('follow/${userid}')
             .then(responce => {
                 return responce.data
             })
     },

     getProfile(userId){
         return instance.get(`profile/` + userId );

     }
 }

 export const authAPI = {
     me() {
         return instance.get(`auth/me`)
     }
 }



