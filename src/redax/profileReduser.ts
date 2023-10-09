import {v1} from "uuid";
import {ActionsType} from "./store";

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
export type PostPropsType = {
    id: string
    post: string;
    likecount: number;
}

export  type IninitialStateType = typeof initialState
let initialState = {
    posts: [
        {id: v1(), post: "Сегодня замечательный день!", likecount: 10},
        {id: v1(), post: "Наконец-то закончил проект!", likecount: 25},
        {id: v1(), post: "Как же я люблю путешествовать!", likecount: 15},
        {id: v1(), post: "Вчера был на концерте своей любимой группы!", likecount: 30},
        {id: v1(), post: "Новый курс по JavaScript на IT-KAMASUTRA просто потрясающий!", likecount: 20}
    ] as Array<PostPropsType>,
    newPostText: '',
}

export const profileReduser = (state:IninitialStateType = initialState, action: ActionsType):IninitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: v1(),
                post: state.newPostText,
                likecount: 0
            }
            let stateCopy = {...state, posts: [...state.posts, newPost]}
            // stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case "NEW-POST-TEXT": {
            state.newPostText = action.text
            return {...state}
        }
        default: return state
    }
}
