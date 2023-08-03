import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogItemPropsType} from "../Dialogs";

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}