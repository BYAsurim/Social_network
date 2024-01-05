import React from 'react';
import {UsersPageType} from "../../redax/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./user/User";


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

    return (
        <div>
            <Paginator changeCurrentPageHandler={changeCurrentPageHandler}
                       pageSize={pageSize}
                       totalItemsCount={totalUsersCount}
                       currentPage={currentPage}/>

            {users.map(u => <User key={u.id}
                                  user={u}
                                  follow={follow}
                                  unFollow={unFollow}
                                  disabled={disabled}/>
            )}
        </div>
    );
};
