import React from 'react';
import s from "./user.module.css";
import photo from "../../../images/images.jpg";
import {NavLink} from 'react-router-dom';
import {UsersPageType} from "../../../redax/usersReducer";


type UsersPropsType = {
    user: UsersPageType
    follow: (id: number) => void
    unFollow: (id: number) => void
    disabled: number[]
}
export const User = ({
                         user,
                         follow,
                         unFollow,
                         disabled

                     }: UsersPropsType) => {


    const unFollowHandler = (id: number) => {
        unFollow(id)
    }

    const followHandler = (id: number) => {
        follow(id)
    }

    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.imgAndButton}>
                        <NavLink to={`/profile/${user.id}`} className={s.navLink}>
                            <img className={s.photo} src={user.photos.small === null ? photo : user.photos.small}
                                 alt="img"/>
                            <div className={s.name}>{user.name}</div>
                        </NavLink>
                    <div>
                        {
                            user.followed ?
                                <button className={s.button} onClick={() => {
                                    unFollowHandler(user.id)
                                }} disabled={disabled.some(id => id === user.id)}>UnFollow</button> :
                                <button className={s.button} onClick={() => {
                                    followHandler(user.id)
                                }} disabled={disabled.some(id => id === user.id)}>Follow</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
