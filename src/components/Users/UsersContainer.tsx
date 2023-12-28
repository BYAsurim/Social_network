import React, {FC} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {
    changeCurrentPageTC,
    FollowAC,
    followUserTC,
    getUsersTC,
    SetUsersAC,
    UnFollowAC,
    unFollowUserTC,
    UsersPageType
} from "../../redax/usersReducer";
import {Users} from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redax/users-selectors";


type MapStateToPropsType = {
    users: Array<UsersPageType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UsersPageType[]) => void,
    getUsers: (currentPage: number, pageSize: number) => void
    changeCurrentPage: (currentPage: number, pageSize: number) => void
    unFollowUser: (id: number) => void
    followUser: (id: number) => void

}

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, Array<UsersPageType>> {
    componentDidMount() {
        // this.props.setIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize)
        //     .then((res) => {
        //         this.props.setIsFetching(false)
        //         this.props.setUsers(res.items)
        //         this.props.setTotalUsersCount(res.totalCount)
        //     })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    changeCurrentPageHandler = (currentPage: number) => {
        // this.props.setIsFetching(true)
        // this.props.setCurrentPage(currentPage)
        // getUsers(currentPage, this.props.pageSize)
        //     .then((res) => {
        //         this.props.setIsFetching(false)
        //         this.props.setUsers(res.items)
        //     })
        this.props.changeCurrentPage(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                :
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       follow={this.props.followUser}
                       unFollow={this.props.unFollowUser}
                       changeCurrentPageHandler={this.changeCurrentPageHandler}
                       disabled={this.props.followingInProgress}
                />}
        </>
    }
}


// let mapStateToProps_ = (state: AppStateType): MapStateToPropsType => {
//     return (
//         state.usersReducer
//     )
// }
let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<FC>(
    connect(mapStateToProps, {
        follow: FollowAC,
        unFollow: UnFollowAC,
        setUsers: SetUsersAC,
        getUsers: getUsersTC,
        changeCurrentPage: changeCurrentPageTC,
        unFollowUser: unFollowUserTC,
        followUser: followUserTC
    }),
    WithAuthRedirect
)(UsersContainer)