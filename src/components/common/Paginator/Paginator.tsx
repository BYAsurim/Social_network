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
                              portionSize = 10,
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
                <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
            }
            {pages.filter(p => p >= leftPortionPage && p <= rightPortionPage)
                .map(p => {
                    const activePage = currentPage === p ? s.selectedPage : ''
                    return (<span key={p} className={activePage}
                                  onClick={() => {
                                      changeCurrentPageHandler(p)
                                  }}>
                        {p}
                    </span>)
                })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
            }

        </div>
    );
};
