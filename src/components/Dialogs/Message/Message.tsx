import s from "../Dialogs.module.css";
import React from "react";
import {MessagePropsType} from "../../../redax/dialogsReduser";



export const Message = (props: MessagePropsType) => {


    return (
        <div className= {s.message}>
            {props.message}
        </div>
    )
}