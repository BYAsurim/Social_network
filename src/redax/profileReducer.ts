import {v1} from "uuid";
import {ActionsType} from "./dialogsReducer";
import {Dispatch} from "redux";
import {getProfile, saveProfile, setStatus, upDatePhoto, upDateStatus} from "../api/api";
import {AppStateType, AppThunkType} from "./redux-store";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";
import {handleServerAppError} from "../utils/error/handleServerAppError";
import {handleServerNetworkError} from "../utils/error/handleServerNetworkError";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const NEW_STATUS_TEXT = 'NEW-STATUS-TEXT'
const UPDATE_PHOTO = 'UPDATE-PHOTO'
const SET_EDIT_MODE_PROFILE_DATA = 'SET-EDIT-MODE-PROFILE-DATA'


export const addPostAC = (newPost: string) => {
    return {
        type: ADD_POST,
        newPost
    } as const
}

export const setUserProfileAC = (profile: ProfilePropsType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const SetStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const UpDateStatusAC = (status: string) => {
    return {
        type: NEW_STATUS_TEXT,
        status
    } as const
}
export const SavePhotoAC = (photos: PhotosType) => {
    return {
        type: UPDATE_PHOTO,
        photos
    } as const
}
export const ProfileEditModeAC = (value: boolean) => {
    return {
        type: SET_EDIT_MODE_PROFILE_DATA,
        value
    } as const
}


export  type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: v1(), post: "Сегодня замечательный день!", likecount: 10},
        {id: v1(), post: "Наконец-то закончил проект!", likecount: 25},
        {id: v1(), post: "Как же я люблю путешествовать!", likecount: 15},
        {id: v1(), post: "Вчера был на концерте своей любимой группы!", likecount: 30},
        {id: v1(), post: "Новый курс по JavaScript на IT-KAMASUTRA просто потрясающий!", likecount: 20}
    ] as Array<PostPropsType>,
    profile: {} as ProfilePropsType,
    status: '',
    profileEditMode: false
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: v1(),
                post: action.newPost,
                likecount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case NEW_STATUS_TEXT: {
            return {...state, status: action.status}
        }
        case UPDATE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case SET_EDIT_MODE_PROFILE_DATA: {
            return {...state, profileEditMode: action.value}
        }
        default:
            return state
    }
}

export const getProfileTC = (id: number | null) => async (dispatch: Dispatch) => {
    const res = await getProfile(id)
    dispatch(setUserProfileAC(res.data))
}
export const setStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    const res = await setStatus(userId)
    dispatch(SetStatusAC(res.data))
}
export const upDateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await upDateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(UpDateStatusAC(status))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }

}
export const savePhotoTC = (file: File) => async (dispatch: Dispatch) => {
    try {
        const res = await upDatePhoto(file)
        if (res.data.resultCode === 0) {
            dispatch(SavePhotoAC(res.data.data.photos))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}
export const saveProfileTC = (profile: ProfileFormDataType): AppThunkType => async (ThunkDispatch, getState: () => AppStateType) => {
    const profileId = getState().authReducer.id
    try {
        const res = await saveProfile(profile)
        if (res.data.resultCode === 0) {
            ThunkDispatch(ProfileEditModeAC(false))
            await ThunkDispatch(getProfileTC(profileId))
        } else {
            handleServerAppError(res.data, ThunkDispatch)
        }
    } catch (e) {
        handleServerNetworkError(e, ThunkDispatch)
    }
}

//types
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

