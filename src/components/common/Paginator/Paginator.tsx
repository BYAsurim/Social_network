import React from 'react';
import s from "./Paginator.module.css";



type UsersPropsType = {
    changeCurrentPageHandler: (currentPage: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export const Paginator = ({
                              pageSize,
                              totalUsersCount,
                              currentPage,
                              changeCurrentPageHandler,
                          }: UsersPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount && i <= 10; i++) {
        pages.push(i)
    }


    return (
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
    );
};
