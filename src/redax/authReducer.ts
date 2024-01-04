import {Dispatch} from "redux";
import {authMe, login, logOut} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'AUTH/SET-USER-DATA'


export  type InitialStateType = typeof initialState
let initialState = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false,
}

export const SetAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id, email, login, isAuth
        }
    } as const
}


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
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
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async (ThunkDispatch) => {
    const res = await login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        ThunkDispatch(authMeTC())
    } else {
        let action = stopSubmit('login', {_error: res.data.messages[0] || 'common error'})
        ThunkDispatch(action)
    }

}
export const logOutTC = () => async (dispatch: Dispatch) => {

    const res = await logOut()
    if (res.data.resultCode === 0) {
        dispatch(SetAuthUserDataAC(0, '', '', false))
    }


}


type ActionsType = ReturnType<typeof SetAuthUserDataAC>