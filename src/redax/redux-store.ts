import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from 'redux-form';
import {appReducer} from "./appReducer";


export const rootRedusers = combineReducers({
    appReducer,
    profileReducer,
    dialogsReducer,
    navbarReducer,
    usersReducer,
    authReducer,
    form: formReducer,
})
// export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootRedusers>


let store = createStore(rootRedusers, applyMiddleware(thunk))


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, any>

//@ts-ignore
window.store = store


export default store
