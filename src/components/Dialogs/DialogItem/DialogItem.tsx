import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {UserPropsType} from "../../../redax/dialogsReducer";
import img from '../../../images/images.jpg'






export const DialogItem = (props: UserPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.img} alt='img' src={img}/>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}