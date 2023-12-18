import s from "../Dialogs.module.css";
import React from "react";
import {MessagePropsType} from "../../../redax/dialogsReducer";



export const Message = (props: MessagePropsType) => {


    return (
        <div className= {s.message}>
            {props.message}
        </div>
    )
}