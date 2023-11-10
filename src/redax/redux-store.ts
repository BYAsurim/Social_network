import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogsReduser} from "./dialogsReduser";
import {navbarReduser} from "./navbarReduser";
import {usersReducer} from "./usersReduser";
import {authReducer} from "./authReduser";


export const rootRedusers = combineReducers({
    profileReduser,
    dialogsReduser,
    navbarReduser,
    usersReducer,
    authReducer,
})
// export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootRedusers>


let store = createStore(rootRedusers)

//@ts-ignore
window.store = store

export default store
