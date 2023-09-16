import React from 'react';
import s from './Dialogs.module.css'

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, addMessageAC, MessagePropsType, UpDateNewTextMessageAC, UserPropsType} from "../../redax/state";

export type DialogsPropsType = {
    data: UserPropsType[]
    messages: Array<MessagePropsType>
    dispatch: (action: ActionsType) => void
}


const Dialogs = (props: DialogsPropsType) => {

    const newMessageElement = React.createRef<HTMLInputElement>()

    const addMessageHandler = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
           props.dispatch(addMessageAC(text))
            newMessageElement.current.value = ''
        }
    }
    const changeInputMessageHandler = ()=>{
        if(newMessageElement.current){
           let  text = newMessageElement.current.value
            props.dispatch(UpDateNewTextMessageAC(text))
        }

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.data.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)}
            </div>
            <div className={s.messages}>
                {
                    props.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)
                }

            </div>
                    <div> </div>
            <div className={s.inputButton}>
                <div>
                    <input ref={newMessageElement} className={s.inputField} onChange={changeInputMessageHandler}/>
                </div>
                <div>
                    <button onClick={addMessageHandler} className={s.sendButton}>send</button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;



