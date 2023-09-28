import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, DialogsPageType,} from "../../redax/state";
import {addMessageAC, UpDateNewTextMessageAC} from "../../redax/dialogsReduser";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}


const Dialogs = (props: DialogsPropsType) => {


    const addMessageHandler = () => {
        props.dispatch(addMessageAC())

    }

    const changeInputMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        let newText = e.currentTarget.value
        if (e.currentTarget) {
            props.dispatch(UpDateNewTextMessageAC(newText))
        }

    }

    const dailogsElements = props.dialogsPage.profile.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messageElements = props.dialogsPage.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dailogsElements}
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



