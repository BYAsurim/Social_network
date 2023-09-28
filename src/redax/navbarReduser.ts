import {v1} from "uuid";
import {ActionsType, FriendsPropsTypeArray} from "./store";

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