import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import Users from "./Users";
import {FollowAC, SetUsersAC, UnFollowAC, UsersPageType} from "../../redax/usersReduser";


type MapStateToPropsType = {
    users:Array< UsersPageType>
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users:Array<UsersPageType>)=> void

}
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStateToPropsType  => {
    return state.usersReduser
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id:number) => dispatch(FollowAC(id)),
        unFollow: (id:number) => dispatch(UnFollowAC(id)),
        setUsers: (users) => dispatch(SetUsersAC(users)),

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;