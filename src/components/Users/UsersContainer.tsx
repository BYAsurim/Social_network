import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";

import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnFollowAC,
    UsersPageType
} from "../../redax/usersReduser";
import Users from "./Users";
import axios from "axios";


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

class UsersContainer extends React.Component<UsersPropsType, Array<UsersPageType>> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    changeCurrentPageHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      changeCurrentPageHandler={this.changeCurrentPageHandler}
        />
    }
}


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



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);