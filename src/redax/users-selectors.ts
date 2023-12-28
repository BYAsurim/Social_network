import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType)=> state.usersReducer.users
export const getPageSize = (state: AppStateType)=> state.usersReducer.pageSize
export const getTotalUsersCount = (state: AppStateType)=> state.usersReducer.totalUsersCount
export const getCurrentPage = (state: AppStateType)=> state.usersReducer.currentPage
export const getIsFetching = (state: AppStateType)=> state.usersReducer.isFetching
export const getFollowingInProgress = (state: AppStateType)=> state.usersReducer.followingInProgress