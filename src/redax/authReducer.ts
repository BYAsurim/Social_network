import {Dispatch} from "redux";
import {authMe, getCaptchaUrl, login, logOut} from "../api/api";
import {AppThunkType} from "./redux-store";
import {handleServerAppError} from "../utils/error/handleServerAppError";
import {handleServerNetworkError} from "../utils/error/handleServerNetworkError";


const SET_USER_DATA = 'AUTH/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET-CAPTCHA-URL-SUCCESS'


export  type InitialStateType = typeof initialState
let initialState = {
    id: null as number | null,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false,
    captchaURL: null as string | null
}

export const SetAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id, email, login, isAuth
        }
    } as const
}
export const getCaptchaURLAC = (captchaURL: string) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaURL
        }
    } as const
}


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export const authMeTC = () => async (dispatch: Dispatch) => {
    const res = await authMe()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(SetAuthUserDataAC(id, email, login, true))
    }

}
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType => async (ThunkDispatch) => {
    try {
        const res = await login(email, password, rememberMe, captcha)
        if (res.data.resultCode === 0) {
            await ThunkDispatch(authMeTC())
        } else {
            if (res.data.resultCode === 10) {
                await ThunkDispatch(getCaptchaTC())
            }
            handleServerAppError(res.data, ThunkDispatch)
        }

    } catch (e) {
        handleServerNetworkError(e, ThunkDispatch)
    }
}
export const logOutTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await logOut()
        if (res.data.resultCode === 0) {
            dispatch(SetAuthUserDataAC(0, '', '', false))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}


export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await getCaptchaUrl()
        const captchaURL = res.data.url
        dispatch(getCaptchaURLAC(captchaURL))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}


type ActionsType = ReturnType<typeof SetAuthUserDataAC>
    | ReturnType<typeof getCaptchaURLAC>