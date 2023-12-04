import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsConteiner";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const Dialogs = (props: DialogsPropsType) => {


    const addMessageHandler = () => {
        props.onAddMessage()

    }
    const addNewMessage = () => {


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
            {/*<div className={s.inputButton}>*/}
            {/*    <div>*/}
            {/*        <input value={props.dialogsPage.newMessageText} className={s.inputField}*/}
            {/*               onChange={changeInputMessageHandler}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button onClick={addMessageHandler} className={s.sendButton}>send</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <DialogsAddMessageForm  onSubmit={addNewMessage}/>


        </div>
    )
}
export default Dialogs;


type FormDataType = {
    message:string
}
const DialogsForm = (props: InjectedFormProps<FormDataType>) => {
    return <div className={s.inputButton}>
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter your message'}
                   name={'newMessageBody'}
                   component={'input'}
                   className={s.inputField}
            />
            <div>
                <button className={s.sendButton}>send</button>
            </div>
        </form>
    </div>
}
const DialogsAddMessageForm = reduxForm<FormDataType>({
    form: 'dialogsAddMessageForm',
    //fields: [] // all the fields in your form
})(DialogsForm)

