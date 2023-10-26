import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import Users from "./Users";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnFollowAC,
    UsersPageType
} from "../../redax/usersReduser";


type MapStateToPropsType = {
    users: Array<UsersPageType>
    pageSize: number
    totalUsersCount: number
    currentPage:number
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersPageType>) => void
    setCurrentPage: (currentPage:number)=> void
    setTotalUsersCount: (count:number)=> void

}
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return (
        state.usersReduser

    )}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => dispatch(FollowAC(id)),
        unFollow: (id: number) => dispatch(UnFollowAC(id)),
        setUsers: (users) => dispatch(SetUsersAC(users)),
        setCurrentPage: (currentPage:number)=> dispatch(SetCurrentPageAC(currentPage)),
        setTotalUsersCount: (count:number)=> dispatch(SetTotalUsersCountAC(count)),

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;