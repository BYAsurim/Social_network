import React, {useState} from 'react';
import s from "./Paginator.module.css";


type PaginatorPropsType = {
    changeCurrentPageHandler: (currentPage: number) => void
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize?: number
}
export const Paginator = ({
                              pageSize,
                              totalItemsCount,
                              currentPage,
                              changeCurrentPageHandler,
                              portionSize = 5,
                          }: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / pageSize))
    const leftPortionPage = (portionNumber - 1) * portionSize + 1
    const rightPortionPage = portionNumber * portionSize

    return (
        <div className={s.selectedPageContainer}>
            {portionNumber > 1 &&
                <button className={s.button} onClick={() => setPortionNumber(portionNumber - 1)}>{'<'}</button>
            }
            {pages.filter(p => p >= leftPortionPage && p <= rightPortionPage)
                .map(p => {
                    const activePage = currentPage === p ? s.selectedPage : ''
                    return (<span key={p} className={`${s.pageNumber} ${activePage}`}
                                  onClick={() => {
                                      changeCurrentPageHandler(p)
                                  }}>
                        {p}
                    </span>)
                })
            }
            {
                portionCount > portionNumber &&
                <button className={s.button} onClick={() => setPortionNumber(portionNumber + 1)}>{'>'}</button>
            }

        </div>
    );
};
