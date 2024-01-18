import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import house from '../../images/navbarImage/house-16.png'
import message from '../../images/navbarImage/message.png'
import news from '../../images/navbarImage/newspaper.png'
import users from '../../images/navbarImage/users.png'
import music from '../../images/navbarImage/music.png'
import settings from '../../images/navbarImage/settings.png'


const Navbar = () => {
    return (
        <div className={s.navigation}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>
                    <img src={house} alt={'#'} className={s.img}/>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>
                    <img src={message} alt={'#'} className={s.img}/>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>
                    <img src={news} alt={'#'} className={s.img}/>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>
                    <img src={users} alt={'#'} className={s.img}/>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>
                    <img src={music} alt={'#'} className={s.img}/>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>
                    <img src={settings} alt={'#'} className={s.img}/>
                    Settings
                </NavLink>
            </div>
            <div className={s.appLine}></div>
        </div>
    )
}

export default Navbar;