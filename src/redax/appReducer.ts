import {authMeTC} from "./authReducer";
import {AppThunkType} from "./redux-store";

type ActionsType = ReturnType<typeof SetInitializedAC>
export  type InitialStateType = typeof initialState
let initialState = {
    initialized: false
}

export const SetInitializedAC = () => {
    return {
        type: 'SET-INITIALIZED',
    } as const
}


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedTC = (): AppThunkType => (dispatch) => {
    let promise = dispatch(authMeTC())

    Promise.all([promise])
        .then(() => {
            dispatch(SetInitializedAC())
        })
}