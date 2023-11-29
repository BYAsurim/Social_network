import {v1} from "uuid";
import {ActionsType} from "./dialogsReduser";
import {Dispatch} from "redux";
import {getProfile, setStatus, upDateStatus} from "../api/api";

export const addPostAC = (newPost?: string) => {
    return {
        type: 'ADD-POST',
        // newPost: newPost
    } as const
}
export const UpDateNewTextPostAC = (text: string) => {
    return {
        type: 'NEW-POST-TEXT',
        text: text
    } as const
}
export const setUserProfileAC = (profile: ProfilePropsType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const SetStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}
export const UpDateStatusAC = (status: string) => {
    return {
        type: 'NEW-STATUS-TEXT',
        status
    } as const
}
export type PostPropsType = {
    id: string
    post: string;
    likecount: number;
}

export type ProfilePropsType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
export type PhotosType = {
    small: string
    large: string
}

export  type IninitialStateType = typeof initialState
let initialState = {
    posts: [
        {id: v1(), post: "Сегодня замечательный день!", likecount: 10},
        {id: v1(), post: "Наконец-то закончил проект!", likecount: 25},
        {id: v1(), post: "Как же я люблю путешествовать!", likecount: 15},
        {id: v1(), post: "Вчера был на концерте своей любимой группы!", likecount: 30},
        {id: v1(), post: "Новый курс по JavaScript на IT-KAMASUTRA просто потрясающий!", likecount: 20}
    ] as Array<PostPropsType>,
    newPostText: '',
    profile: {} as ProfilePropsType,
    status: ''
}

export const profileReduser = (state: IninitialStateType = initialState, action: ActionsType): IninitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: v1(),
                post: state.newPostText,
                likecount: 0
            }
            let stateCopy = {...state, posts: [...state.posts, newPost]}
            // stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case "NEW-POST-TEXT": {
            state.newPostText = action.text
            return {...state}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "NEW-STATUS-TEXT":{
            return {...state, status: action.status}
        }

        default:
            return state
    }
}

export const getProfileTC = (id: string) => (dispatch: Dispatch) => {
    getProfile(id)
        .then((res) => {
            dispatch(setUserProfileAC(res.data))
        })
}
export const setStatusTC = (userId: string) => (dispatch: Dispatch) => {
    setStatus(userId)
        .then((res) => {
            dispatch(SetStatusAC(res.data))
        })
}
export const upDateStatusTC = (status: string) => (dispatch: Dispatch) => {
    upDateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0){
                dispatch(UpDateStatusAC(status))
            }
        })
}
