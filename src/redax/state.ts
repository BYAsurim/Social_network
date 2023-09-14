import {v1} from "uuid";


export let rerenderThree = () => {
    console.log('rerenderThree')
}
export type PostPropsType = {
    id: string
    post: string;
    likecount: number;
}
export type UserPropsType = {
    id: string
    name: string
}
export type FriendsPropsType = {
    id: string
    name: string
}
export type FriendsPropsTypeArray = {
    friends: Array<FriendsPropsType>
}
export type MessagePropsType = {
    id: string
    message: string
}
export type PostPropsTypeArray = {
    posts: PostPropsType[]
    newPostText: string
}
export type DialogsPageType = {
    profile: UserPropsType[]
    messages: Array<MessagePropsType>

}
export type StatePropsType = {
    profilePage: PostPropsTypeArray
    dialogsPage: DialogsPageType
    sidebar: FriendsPropsTypeArray
}
export type StorePropsType = {
    _state: StatePropsType
    // addPost: () => void
    // upDateNewPostText: (text: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    _callSubcriber: () => void
    dispatch: (action: ActionsType)=> void
}

export type AddPostActionType = {
    type:'ADD-POST',
    newPost: string
}
export type UpDateNewTextPostActionType = {
    type:'NEW-POST-TEXT',
    text: string
}
export type ActionsType = AddPostActionType | UpDateNewTextPostActionType

let store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), post: "Сегодня замечательный день!", likecount: 10},
                {id: v1(), post: "Наконец-то закончил проект!", likecount: 25},
                {id: v1(), post: "Как же я люблю путешествовать!", likecount: 15},
                {id: v1(), post: "Вчера был на концерте своей любимой группы!", likecount: 30},
                {id: v1(), post: "Новый курс по JavaScript на IT-KAMASUTRA просто потрясающий!", likecount: 20}
            ],
            newPostText: ''

        },
        dialogsPage: {
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
            ]
        },
        sidebar: {
            friends: [
                {id: v1(), name: 'Ivan'},
                {id: v1(), name: 'Elena'},
                {id: v1(), name: 'Katya'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubcriber() {
        console.log('State changed')
    },
    // addPost() {
    //     const newPost = {
    //         id: v1(),
    //         post: this._state.profilePage.newPostText,
    //         likecount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubcriber()
    //
    // },
    // upDateNewPostText(text: string) {
    //     this._state.profilePage.newPostText = text
    //     this._callSubcriber()
    // },

    subscribe(observer: () => void) {
        this._callSubcriber = observer
    },
    dispatch(action: ActionsType){
        if(action.type === 'ADD-POST'){
            const newPost = {
                id: v1(),
                post: this._state.profilePage.newPostText,
                likecount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubcriber()
        }else if(action.type === 'NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.text
            this._callSubcriber()
        }
    }
}

// let state: StatePropsType = {
//     profilePage: {
//         posts: [
//             {id: v1(), post: "Сегодня замечательный день!", likecount: 10},
//             {id: v1(), post: "Наконец-то закончил проект!", likecount: 25},
//             {id: v1(), post: "Как же я люблю путешествовать!", likecount: 15},
//             {id: v1(), post: "Вчера был на концерте своей любимой группы!", likecount: 30},
//             {id: v1(), post: "Новый курс по JavaScript на IT-KAMASUTRA просто потрясающий!", likecount: 20}
//         ],
//         newPostText: ''
//
//     },
//     dialogsPage: {
//         profile: [
//             {id: v1(), name: "Sasha"},
//             {id: v1(), name: "Valera"},
//             {id: v1(), name: "Dima"},
//             {id: v1(), name: "Lena"},
//             {id: v1(), name: "Emily"},
//             {id: v1(), name: "Frank"}
//         ],
//         messages: [
//             {id: v1(), message: "Привет! Как дела?"},
//             {id: v1(), message: "Как прошло твоё выходное?"},
//             {id: v1(), message: "У нас есть новости по проекту. Можем обсудить на совещании в 15:00?"},
//             {id: v1(), message: "Спасибо за отзыв! Очень рады, что наш продукт вам понравился."},
//             {id: v1(), message: "Не забудьте записаться на курс по JavaScript!"}
//         ]
//     },
//     sidebar: {
//         friends:[
//             { id: v1(), name: 'Ivan' },
//             { id: v1(), name: 'Elena' },
//             { id: v1(), name: 'Katya' }
//         ]
//     }
//
// }


// export const addPost = ()=>{
//     const newPost = {id: v1(), post:state.profilePage.newPostText , likecount: 0}
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderThree()
//
// }
// export const upDateNewPostText = (text:string)=>{
//     state.profilePage.newPostText = text
//     rerenderThree()
// }
// export const subscribe = (observer: ()=>void)=>{
//     rerenderThree = observer
// }

export default store
