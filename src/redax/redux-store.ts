import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogsReduser} from "./dialogsReduser";
import {navbarReduser} from "./navbarReduser";

let redusers = combineReducers({
    profileReduser,
    dialogsReduser,
    navbarReduser
})
export type AppStore = typeof store

let store = createStore(redusers)


export default store