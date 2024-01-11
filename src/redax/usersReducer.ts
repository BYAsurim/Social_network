import {followUsers, getUsers, unFollowUsers} from "../api/api";
import {Dispatch} from "redux";
import {handleServerAppError} from "../utils/error/handleServerAppError";
import {handleServerNetworkError} from "../utils/error/handleServerNetworkError";


const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET-USERS'
const SET_CURRENT_PAGE = 'USERS/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'USERS/SET-TOTAL-USERS-COUNT'
const SET_TOGGLE_IS_FETCHING = 'USERS/SET-TOGGLE-IS-FETCHING'
const SET_FOLLOWING_IS_PROGRESS = 'USERS/SET-FOLLOWING-IS-PROGRESS'


export  type InitialStateType = typeof initialState
let initialState = {
    users: [] as Array<UsersPageType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {

            return {
                ...state, users: state.users.map(u => u.id === action.id ?
                    {...u, followed: true} : u)
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => u.id === action.id ?
                    {...u, followed: false} : u)
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case SET_TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case SET_FOLLOWING_IS_PROGRESS: {
            return {
                ...state, followingInProgress: action.followingProgress
                    ? [...state.followingInProgress, action.UserId]
                    : state.followingInProgress.filter(id => id !== action.UserId)
            }
        }

        default:
            return state
    }
}

export const FollowAC = (id: number) => {
    return {
        type: FOLLOW,
        id
    } as const
}
export const UnFollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        id
    } as const
}
export const SetUsersAC = (users: UsersPageType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const SetTotalUsersCountAC = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    } as const
}
export const ToggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: SET_TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const ToggleIsFollowingAC = (followingProgress: boolean, UserId: number) => {
    return {
        type: SET_FOLLOWING_IS_PROGRESS,
        followingProgress,
        UserId
    } as const
}

//thunk
export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(ToggleIsFetchingAC(true))
        const res = await getUsers(currentPage, pageSize)
        dispatch(SetUsersAC(res.items))
        dispatch(SetTotalUsersCountAC(res.totalCount))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(ToggleIsFetchingAC(false))
    }

}
export const changeCurrentPageTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(ToggleIsFetchingAC(true))
        dispatch(SetCurrentPageAC(currentPage))
        const res = await getUsers(currentPage, pageSize)
        dispatch(SetUsersAC(res.items))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(ToggleIsFetchingAC(false))
    }


}
export const followUserTC = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(ToggleIsFollowingAC(true, id))
        const res = await followUsers(id)
        if (res.data.resultCode === 0) {
            dispatch(FollowAC(id))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(ToggleIsFollowingAC(false, id))
    }

}
export const unFollowUserTC = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(ToggleIsFollowingAC(true, id))
        const res = await unFollowUsers(id)
        if (res.data.resultCode === 0) {
            dispatch(UnFollowAC(id))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(ToggleIsFollowingAC(false, id))
    }

}


// types
export type UsersPageType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    uniqueUrlName: string,
    location: LocationType,
    photos: PhotosType
}
type PhotosType = {
    small: string,
    large: string
}

type LocationType = {
    city: string,
    country: string
}

type ActionsType = ReturnType<typeof FollowAC> |
    ReturnType<typeof UnFollowAC> |
    ReturnType<typeof SetUsersAC> |
    ReturnType<typeof SetCurrentPageAC> |
    ReturnType<typeof SetTotalUsersCountAC> |
    ReturnType<typeof ToggleIsFetchingAC> |
    ReturnType<typeof ToggleIsFollowingAC>
