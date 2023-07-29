import React from 'react';
import s from './Dialogs.module.css'

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemPropsArrayType, MessagePropsArrayType} from "../../index";

 export type DialogsPropsType = {
     data:DialogItemPropsArrayType
     messages:MessagePropsArrayType
}


const Dialogs = (props:DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.data.map(el =><DialogItem id={el.id} name={el.name}/>)}


                {/*<DialogItem id={'1'} name={'Sasha'}/>*/}
                {/*<DialogItem id={'2'} name={'Valera'}/>*/}
                {/*<DialogItem id={'3'} name={'Dima'}/>*/}
                {/*<DialogItem id={'4'} name={'Sveta'}/>*/}
                {/*<DialogItem id={'5'} name={'Lena'}/>*/}
            </div>

            <div className={s.messages}>
                {
                    props.messages.map(el=><Message id={el.id} message={el.message}/>)
                }
                {/*<Message message={'hi'}/>*/}
                {/*<Message message={'How are you?'}/>*/}
                {/*<Message message={'Whats app??'}/>*/}

            </div>
        </div>
    )
}
export default Dialogs;



