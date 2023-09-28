import {v1} from "uuid";
import {ActionsType, PostPropsTypeArray} from "./state";

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

export const profileReduser = (state: PostPropsTypeArray, action: ActionsType) => {
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
