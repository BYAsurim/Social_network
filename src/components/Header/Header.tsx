import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean,
    login: string
}

const Header: React.FC<HeaderPropsType> = ({
                                               isAuth,
                                               login
                                           }
) => {
    return (
        <header className={s.header}>
            <img src="https://static.wikia.nocookie.net/0c9787f8-4011-4dbe-9ca0-44fafba10dec/scale-to-width/755"
                 alt=""/>
            <div className={s.login}>
                {isAuth ? login :
                    <NavLink to={'/login'}> Login</NavLink>
                }

            </div>
        </header>

    )
}

export default Header;