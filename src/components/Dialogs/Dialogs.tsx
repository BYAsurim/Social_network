import React from 'react';
import s from './Dialogs.module.css'
import {v1} from "uuid";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

 export type DialogItemPropsType = {
    id: string
    name: string
}
export type MessagePropsType = {
    id:string
    message:string
}

type DialogsPropsType = {}

const Dialogs = (props: DialogsPropsType) => {

    const data = [
        { id: v1(), name: "Sasha" },
        { id: v1(), name: "Valera" },
        { id: v1(), name: "Dima" },
        { id: v1(), name: "Lena" },
        { id: v1(), name: "Emily" },
        { id: v1(), name: "Frank" }
    ];
    const messages = [
        { id: v1(), message: "Привет! Как дела?" },
        { id: v1(), message: "Как прошло твоё выходное?" },
        { id: v1(), message: "У нас есть новости по проекту. Можем обсудить на совещании в 15:00?" },
        { id: v1(), message: "Спасибо за отзыв! Очень рады, что наш продукт вам понравился." },
        { id: v1(), message: "Не забудьте записаться на курс по JavaScript!" }
    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {data.map(el =><DialogItem id={el.id} name={el.name}/>)}


                {/*<DialogItem id={'1'} name={'Sasha'}/>*/}
                {/*<DialogItem id={'2'} name={'Valera'}/>*/}
                {/*<DialogItem id={'3'} name={'Dima'}/>*/}
                {/*<DialogItem id={'4'} name={'Sveta'}/>*/}
                {/*<DialogItem id={'5'} name={'Lena'}/>*/}
            </div>

            <div className={s.messages}>
                {
                    messages.map(el=><Message id={el.id} message={el.message}/>)
                }
                {/*<Message message={'hi'}/>*/}
                {/*<Message message={'How are you?'}/>*/}
                {/*<Message message={'Whats app??'}/>*/}

            </div>
        </div>
    )
}
export default Dialogs;



