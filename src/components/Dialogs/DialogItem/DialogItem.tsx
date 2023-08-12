import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import { UserPropsType} from "../../../redax/state";




export const DialogItem = (props: UserPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}