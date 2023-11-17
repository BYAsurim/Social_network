import {Dispatch} from "redux";
import {authMe} from "../api/api";

type ActionsType = ReturnType<typeof SetAuthUserDataAC>
export  type InitialStateType = typeof initialState
let initialState = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false,
}

export const SetAuthUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id, email, login
        }
    } as const
}


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data, isAuth: true
            }
        }
        default:
            return state
    }
}

export const authMeTC = () => (dispatch: Dispatch) => {
    authMe()
        .then((res) => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(SetAuthUserDataAC(id, email, login))
            }

        })
}
