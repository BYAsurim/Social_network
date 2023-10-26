import React from 'react';
import s from "./users.module.css";
import photo from "../../images/images.jpg";
import {UsersPageType} from "../../redax/usersReduser";


type UsersPropsType =  {
    users: Array<UsersPageType>
    changeCurrentPageHandler: (currentPage: number)=>void
    pageSize: number
    totalUsersCount: number
    currentPage:number
    follow: (id: number) => void
    unFollow: (id: number) => void
}
const Users: React.FC<UsersPropsType> = ({
                                              users,
                                              pageSize,
                                              totalUsersCount,
                                              currentPage,
                                              follow,
                                              unFollow,
                                              changeCurrentPageHandler

                                          }) => {


    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount && i <= 10; i++) {
        pages.push(i)
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
                        <img className={s.photo} src={u.photos.small === null ? photo : u.photos.small} alt="img"/>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => {
                                    unFollow(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    follow(u.id)
                                }}>Follow</button>
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

export default Users;