import {v1} from "uuid";
import {ActionsType} from "./dialogsReduser";

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

export const navbarReduser = (state = initialState, action: ActionsType): FriendsPropsTypeArray => {
    return state


}