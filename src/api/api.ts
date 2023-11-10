import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e7e3f008-e2dc-4435-835d-1184d4097cbd'
    }
})

export const getUsers = (currentPage:number = 1, pageSize:number = 10)=>{

   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(res => res.data)
}