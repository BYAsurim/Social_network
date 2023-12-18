import {v1} from "uuid";
import {ActionsType} from "./dialogsReducer";

export type FriendsPropsType = {
    id: string
    name: string
}
export type FriendsPropsTypeArray = {
    friends: Array<FriendsPropsType>
}

let initialState = {
    friends: [
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Elena'},
        {id: v1(), name: 'Katya'}
    ]
}

export const navbarReducer = (state = initialState, action: ActionsType): FriendsPropsTypeArray => {
    return state


}