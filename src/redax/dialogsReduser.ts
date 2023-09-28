import {v1} from "uuid";
import {ActionsType, DialogsPageType} from "./state";

export const addMessageAC = (newText?: string) => {
    return {
        type: 'ADD-MESSAGE',
        // newText: newText
    } as const
}
export const UpDateNewTextMessageAC = (text: string) => {
    return {
        type: 'NEW-MESSAGE-TEXT',
        text: text
    } as const
}

export const dialogsReduser = (state: DialogsPageType, action: ActionsType) => {

    switch (action.type) {
        case "ADD-MESSAGE":{
            const newMessage = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case "NEW-MESSAGE-TEXT":{
            state.newMessageText = action.text
            return state
        }
        default: return state

    }

}