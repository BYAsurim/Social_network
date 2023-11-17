import React from 'react';
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
} from "../../redax/usersReduser";
import {Users} from "./Users";
import Preloader from "../common/preloader/Preloader";


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
// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'e7e3f008-e2dc-4435-835d-1184d4097cbd'
//     }
// })

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


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return (
        state.usersReducer
    )
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (id: number) => dispatch(FollowAC(id)),
//         unFollow: (id: number) => dispatch(UnFollowAC(id)),
//         setUsers: (users) => dispatch(SetUsersAC(users)),
//         setCurrentPage: (currentPage: number) => dispatch(SetCurrentPageAC(currentPage)),
//         setTotalUsersCount: (count: number) => dispatch(SetTotalUsersCountAC(count)),
//         setIsFetching: (isFetching: boolean) => dispatch(ToggleIsFetchingAC(isFetching))
//
//     }
// }


export default connect(mapStateToProps, {
    follow: FollowAC,
    unFollow: UnFollowAC,
    setUsers: SetUsersAC,
    getUsers: getUsersTC,
    changeCurrentPage: changeCurrentPageTC,
    unFollowUser: unFollowUserTC,
    followUser: followUserTC
})(UsersContainer);