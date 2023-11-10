import {v1} from "uuid";
import {addPostAC, setUserProfileAC, UpDateNewTextPostAC} from "./profileReduser";

export type DialogsPageType = {
    profile: UserPropsType[]
    messages: Array<MessagePropsType>
    newMessageText: string
}
export type MessagePropsType = {
    id: string
    message: string
}
export type UserPropsType = {
    id: string
    name: string
}

export type ActionsType = ReturnType<typeof addPostAC> |
    ReturnType<typeof UpDateNewTextPostAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof UpDateNewTextMessageAC>|
    ReturnType<typeof setUserProfileAC>

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
let initialState:DialogsPageType = {
    profile: [
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Lena"},
        {id: v1(), name: "Emily"},
        {id: v1(), name: "Frank"}
    ],
    messages: [
        {id: v1(), message: "Привет! Как дела?"},
        {id: v1(), message: "Как прошло твоё выходное?"},
        {id: v1(), message: "У нас есть новости по проекту. Можем обсудить на совещании в 15:00?"},
        {id: v1(), message: "Спасибо за отзыв! Очень рады, что наш продукт вам понравился."},
        {id: v1(), message: "Не забудьте записаться на курс по JavaScript!"}
    ],
    newMessageText: ''
}

export const dialogsReduser = (state = initialState, action: ActionsType): DialogsPageType => {

    switch (action.type) {
        case "ADD-MESSAGE":{
            const newMessage = {
                id: v1(),
                message: state.newMessageText
            }
            // state.messages.push(newMessage)
            // state.newMessageText = ''
            return {...state, messages:[...state.messages, newMessage], newMessageText: ''}
        }
        case "NEW-MESSAGE-TEXT":{
            state.newMessageText = action.text
            return {...state}
        }
        default: return state

    }

}