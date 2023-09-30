import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogsReduser} from "./dialogsReduser";
import {navbarReduser} from "./navbarReduser";

export const rootRedusers = combineReducers({
    profileReduser,
    dialogsReduser,
    navbarReduser
})
export type AppStoreType = typeof store
export type AppStateType = ReturnType <typeof rootRedusers>


let store = createStore(rootRedusers)


export default store
