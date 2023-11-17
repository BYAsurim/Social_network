import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogsReduser} from "./dialogsReduser";
import {navbarReduser} from "./navbarReduser";
import {usersReducer} from "./usersReduser";
import {authReducer} from "./authReduser";
import thunk from "redux-thunk"


export const rootRedusers = combineReducers({
    profileReduser,
    dialogsReduser,
    navbarReduser,
    usersReducer,
    authReducer,
})
// export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootRedusers>


let store = createStore(rootRedusers, applyMiddleware(thunk))

//@ts-ignore
window.store = store


export default store
