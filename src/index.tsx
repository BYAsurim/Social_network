import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redax/state";


// export type PropsTypePost = {
//     id: string
//     post: string;
//     likecount: number;
// }
// export type DialogItemPropsType = {
//     id: string
//     name: string
// }
// export type MessagePropsType = {
//     id: string
//     message: string
// }
// export type PropsTypePostArray = PropsTypePost[]
// export type DialogItemPropsArrayType = DialogItemPropsType[]
// export type MessagePropsArrayType = Array<MessagePropsType>
//
//
// const posts: PropsTypePostArray = [
//     {id: v1(), post: "Сегодня замечательный день!", likecount: 10},
//     {id: v1(), post: "Наконец-то закончил проект!", likecount: 25},
//     {id: v1(), post: "Как же я люблю путешествовать!", likecount: 15},
//     {id: v1(), post: "Вчера был на концерте своей любимой группы!", likecount: 30},
//     {id: v1(), post: "Новый курс по JavaScript на IT-KAMASUTRA просто потрясающий!", likecount: 20}
// ];
// const data: DialogItemPropsArrayType = [
//     {id: v1(), name: "Sasha"},
//     {id: v1(), name: "Valera"},
//     {id: v1(), name: "Dima"},
//     {id: v1(), name: "Lena"},
//     {id: v1(), name: "Emily"},
//     {id: v1(), name: "Frank"}
// ];
// const messages: MessagePropsArrayType = [
//     {id: v1(), message: "Привет! Как дела?"},
//     {id: v1(), message: "Как прошло твоё выходное?"},
//     {id: v1(), message: "У нас есть новости по проекту. Можем обсудить на совещании в 15:00?"},
//     {id: v1(), message: "Спасибо за отзыв! Очень рады, что наш продукт вам понравился."},
//     {id: v1(), message: "Не забудьте записаться на курс по JavaScript!"}
// ];


ReactDOM.render(
    <App state={state}

        // posts={posts}
        // data={data}
        // messages={messages}


    />,
    document.getElementById('root')
);