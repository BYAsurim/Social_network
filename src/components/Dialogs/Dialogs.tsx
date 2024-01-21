import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsConteiner";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputControls from "../common/FormsControl/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


const Dialogs = (props: DialogsPropsType) => {

    const addNewMessage = (values: FormDataType) => {
        props.onAddMessage(values.newMessage)
    }

    const dialogsElements = props.dialogsPage.profile.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messageElements = props.dialogsPage.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)

    return (
        <div className={s.dialogsContainer}>
            <div className={s.elemMessagesContainer}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {
                        messageElements
                    }

                </div>
            </div>
            <DialogsAddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}
export default Dialogs;


type FormDataType = {
    newMessage: string
}

const maxLength50 = maxLengthCreator(50)
const DialogsForm = (props: InjectedFormProps<FormDataType>) => {
    return <div>
        <form onSubmit={props.handleSubmit} className={s.inputButton}>
            <Field placeholder={'Enter your message'}
                   name={'newMessage'}
                   component={InputControls}
                   className={s.inputField}
                   validate={[requiredField, maxLength50]}
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

