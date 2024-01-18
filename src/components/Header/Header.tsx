import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../images/logo.png'

type HeaderPropsType = {
    isAuth: boolean,
    login: string,
    logOut: () => void
}

const Header: React.FC<HeaderPropsType> = ({
                                               isAuth,
                                               login,
                                               logOut
                                           }
) => {
    return (
        <header className={s.header}>
            <img src={logo} className={s.logo}
                 alt="logo"/>
            <div className={s.login}>
                {isAuth
                    ? <div>{login} - <button onClick={logOut} className={s.button}> Log out </button></div>
                    : <NavLink to={'/login'}>
                        <button className={s.buttonLogin}> Login</button>
                    </NavLink>
                }

            </div>
        </header>

    )
}

export default Header;