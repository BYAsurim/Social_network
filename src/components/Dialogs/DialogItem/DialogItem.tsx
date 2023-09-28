import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import { UserPropsType} from "../../../redax/store";




export const DialogItem = (props: UserPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.img} alt='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEcE75-bcRjGyl0cytaeO-wBIGizyfH5dow&usqp=CAU'/>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}