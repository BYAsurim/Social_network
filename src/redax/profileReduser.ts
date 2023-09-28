import {v1} from "uuid";
import {ActionsType, PostPropsTypeArray} from "./store";

export const addPostAC = (newPost?: string) => {
    return {
        type: 'ADD-POST',
        // newPost: newPost
    } as const
}
export const UpDateNewTextPostAC = (text: string) => {
    return {
        type: 'NEW-POST-TEXT',
        text: text
    } as const
}

let initialState = {
    posts: [
        {id: v1(), post: "Сегодня замечательный день!", likecount: 10},
        {id: v1(), post: "Наконец-то закончил проект!", likecount: 25},
        {id: v1(), post: "Как же я люблю путешествовать!", likecount: 15},
        {id: v1(), post: "Вчера был на концерте своей любимой группы!", likecount: 30},
        {id: v1(), post: "Новый курс по JavaScript на IT-KAMASUTRA просто потрясающий!", likecount: 20}
    ],
    newPostText: ''
}

export const profileReduser = (state = initialState, action: ActionsType): PostPropsTypeArray => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: v1(),
                post: state.newPostText,
                likecount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case "NEW-POST-TEXT": {
            state.newPostText = action.text
            return state
        }
        default: return state
    }
}
