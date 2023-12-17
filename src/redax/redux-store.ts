import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogsReduser} from "./dialogsReduser";
import {navbarReduser} from "./navbarReduser";
import {usersReducer} from "./usersReduser";
import {authReducer} from "./authReduser";
import thunk, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from 'redux-form';


export const rootRedusers = combineReducers({
    profileReduser,
    dialogsReduser,
    navbarReduser,
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
