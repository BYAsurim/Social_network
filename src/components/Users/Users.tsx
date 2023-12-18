import React from 'react';
import s from "./users.module.css";
import photo from "../../images/images.jpg";
import {UsersPageType} from "../../redax/usersReducer";
import {NavLink} from 'react-router-dom';



type UsersPropsType = {
    users: Array<UsersPageType>
    changeCurrentPageHandler: (currentPage: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    disabled: number[]
}
export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    pageSize,
                                                    totalUsersCount,
                                                    currentPage,
                                                    follow,
                                                    unFollow,
                                                    changeCurrentPageHandler,
                                                    disabled

                                                }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount && i <= 10; i++) {
        pages.push(i)
    }
    // const instance = axios.create({
    //     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    //     withCredentials: true,
    //     headers: {
    //         'API-KEY': 'e7e3f008-e2dc-4435-835d-1184d4097cbd'
    //     }
    // })

    const unFollowHandler = (id: number) => {
        // setFollowingInProgress(true, id)
        // instance.delete(`follow/${id}`,)
        //     .then((res) => {
        //         if (res.data.resultCode === 0) {
        //             unFollow(id)
        //         }
        //         setFollowingInProgress(false, id)
        //     })
        unFollow(id)
    }

    const followHandler = (id: number) => {
        // setFollowingInProgress(true, id)
        // instance.post(`follow/${id}`, {})
        //     .then((res) => {
        //         if (res.data.resultCode === 0) {
        //             follow(id)
        //         }
        //         setFollowingInProgress(false, id)
        //     })
        follow(id)
    }

    return (
        <div>
            <div className={s.selectedPageContainer}>
                {pages.map(p => {
                    const activePage = currentPage === p ? s.selectedPage : ''
                    return (<span key={p} className={activePage}
                                  onClick={() => {
                                      changeCurrentPageHandler(p)
                                  }}>
                        {p}
                    </span>)
                })
                }
            </div>

            {users.map(u => <div key={u.id} className={s.wrapper}>
                <div className={s.imgAndButton}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={s.photo} src={u.photos.small === null ? photo : u.photos.small} alt="img"/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => {
                                    unFollowHandler(u.id)
                                }} disabled={disabled.some(id => id === u.id)}>UnFollow</button> :
                                <button onClick={() => {
                                    followHandler(u.id)
                                }} disabled={disabled.some(id => id === u.id)}>Follow</button>
                        }

                    </div>

                </div>
                <div className={s.content}>
                    <div className={s.nameAndStatus}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>

                    </div>
                </div>
            </div>)}
            <button className={s.button}>Show more</button>
        </div>
    );
};
