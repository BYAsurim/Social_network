import axios from "axios";
import {ProfilePropsType} from "../redax/profileReducer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e7e3f008-e2dc-4435-835d-1184d4097cbd'
    }
})
// Users
export const getUsers = (currentPage:number = 1, pageSize:number = 10)=>{
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(res => res.data)
}
export const followUsers = (id: number)=>{
   return instance.post(`follow/${id}`, {})

}
export const unFollowUsers = (id: number)=>{
   return instance.delete(`follow/${id}`,)

}

//Profile
export const getProfile = (id:number)=>{
    return instance.get<ProfilePropsType>(`profile/${id}`)

}
export const setStatus = (userId:number)=>{
    return instance.get(`profile/status/${userId}`)
}
export const upDateStatus = (status:string)=>{
    return instance.put('profile/status', {status})
}



//Auth
export const authMe = ()=>{
    return instance.get(`auth/me`)
}
export const login = (email:string, password:string, rememberMe:boolean = false)=>{
    return instance.post(`auth/login`, {email, password, rememberMe})
}
export const logOut = ()=>{
    return instance.delete(`auth/login`)
}