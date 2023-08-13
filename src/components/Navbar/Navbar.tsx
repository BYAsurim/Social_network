import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import BestFriends from "../Friends/BestFriends";
import {StatePropsType} from "../../redax/state";

type NavbarPropsType = {
    state: StatePropsType
}

const Navbar = (props:NavbarPropsType) => {
    return (
        <div className={s.navigation }>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
            <div className={s.item }><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
            <div className={s.friends} >
            <div className={s.item}><NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink></div>
            </div>
            <div className={s.friends} >

            <div className={s.item}><NavLink to='/bestfriends'> <BestFriends state={props.state} /> </NavLink></div>
            </div>


        </div>
    )
}

export default Navbar;