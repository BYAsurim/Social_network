import {v1} from "uuid";
import {
    addPostAC,
    ProfileEditModeAC,
    SavePhotoAC,
    SetStatusAC,
    setUserProfileAC,
    UpDateStatusAC
} from "./profileReducer";

const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogsPageType = {
    profile: UserPropsType[]
    messages: Array<MessagePropsType>

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
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof SetStatusAC> |
    ReturnType<typeof UpDateStatusAC> |
    ReturnType<typeof SavePhotoAC> |
    ReturnType<typeof ProfileEditModeAC>



export const addMessageAC = (newMessage: string) => {
    return {
        type: ADD_MESSAGE,
        newMessage
    } as const
}

let initialState:DialogsPageType = {
    profile: [
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Lena"},
        {id: v1(), name: "Emily"},
    ],
    messages: [
        {id: v1(), message: "Привет! Как дела?"},
        {id: v1(), message: "Как прошло твоё выходное?"},
        {id: v1(), message: "У нас есть новости по проекту. Можем обсудить на совещании в 15:00?"},
        {id: v1(), message: "Спасибо за отзыв! Очень рады, что наш продукт вам понравился."},
        {id: v1(), message: "Не забудьте записаться на курс по JavaScript!"}
    ],

}

export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:{
            const newMessage = {
                id: v1(),
                message: action.newMessage
            }
            return {...state, messages:[...state.messages, newMessage]}
        }

        default: return state

    }

}