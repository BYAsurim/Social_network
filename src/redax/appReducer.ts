import {authMeTC} from "./authReducer";
import {AppThunkType} from "./redux-store";
import {handleServerNetworkError} from "../utils/error/handleServerNetworkError";


const SET_INITIALIZED = 'SET-INITIALIZED'
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE'


type ActionsType = ReturnType<typeof SetInitializedAC>
    | ReturnType<typeof setErrorMessageAC>

export  type InitialStateType = typeof initialState

let initialState = {
    initialized: false,
    error: null as string | null
}

export const SetInitializedAC = () => {
    return {
        type: SET_INITIALIZED,
    } as const
}
export const setErrorMessageAC = (error: string | null) => {
    return {
        type: SET_ERROR_MESSAGE,
        payload: {
            error
        }
    } as const
}


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        case SET_ERROR_MESSAGE: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const initializedTC = (): AppThunkType => (dispatch) => {
    try {
        let promise = dispatch(authMeTC())
        Promise.all([promise])
            .then(() => {
                dispatch(SetInitializedAC())
            })
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }

}