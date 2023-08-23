import React from 'react';
import s from './Dialogs.module.css'

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagePropsType, UserPropsType} from "../../redax/state";

export type DialogsPropsType = {
    data: UserPropsType[]
    messages: Array<MessagePropsType>
}


const Dialogs = (props: DialogsPropsType) => {

    const newMessageElement = React.createRef<HTMLInputElement>()

    const addMessageHandler = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            alert(text)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.data.map(el => <DialogItem id={el.id} name={el.name}/>)}
            </div>

            <div className={s.messages}>
                {
                    props.messages.map(el => <Message id={el.id} message={el.message}/>)
                }

            </div>
                    <div> </div>
            <div className={s.inputButton}>
                <div>
                    <input ref={newMessageElement} className={s.inputField}/>
                </div>
                <div>
                    <button onClick={addMessageHandler} className={s.sendButton}>send</button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;



