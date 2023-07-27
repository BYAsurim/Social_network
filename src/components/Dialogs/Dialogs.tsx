import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {

}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active} >
                  <NavLink to={'/dialogs/1'}> Sasha </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}> Valera </NavLink>

                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}> Dima </NavLink>

                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}> Sveta </NavLink>

                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}> Lena </NavLink>

                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Whats app??</div>
            </div>
        </div>
    );
};

export default Dialogs;