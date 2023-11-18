import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsConteiner";


const Dialogs = (props: DialogsPropsType) => {


    const addMessageHandler = () => {
        props.onAddMessage()

    }

    const changeInputMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value
        if (e.currentTarget) {
            props.onChangeInputMessage(newText)
        }

    }
    const dialogsElements = props.dialogsPage.profile.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messageElements = props.dialogsPage.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {
                    messageElements
                }

            </div>
            <div></div>
            <div className={s.inputButton}>
                <div>
                    <input value={props.dialogsPage.newMessageText} className={s.inputField}
                           onChange={changeInputMessageHandler}/>
                </div>
                <div>
                    <button onClick={addMessageHandler} className={s.sendButton}>send</button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;



