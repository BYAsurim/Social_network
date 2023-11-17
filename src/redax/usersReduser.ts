import {followUsers, getUsers, unFollowUsers} from "../api/api";
import {Dispatch} from "redux";

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
        case 'FOLLOW': {

            return {
                ...state, users: state.users.map(u => u.id === action.id ?
                    {...u, followed: true} : u)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state, users: state.users.map(u => u.id === action.id ?
                    {...u, followed: false} : u)
            }
        }
        case 'SET-USERS': {
            return {
                ...state, users: [...action.users]
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case 'SET-TOGGLE-IS-FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'SET-FOLLOWING-IS-PROGRESS': {
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
        type: 'FOLLOW',
        id
    } as const
}
export const UnFollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id
    } as const
}
export const SetUsersAC = (users: UsersPageType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const SetTotalUsersCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        count
    } as const
}
export const ToggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
export const ToggleIsFollowingAC = (followingProgress: boolean, UserId: number) => {
    return {
        type: 'SET-FOLLOWING-IS-PROGRESS',
        followingProgress,
        UserId
    } as const
}
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(ToggleIsFetchingAC(true))
    getUsers(currentPage, pageSize)
        .then((res) => {
            dispatch(ToggleIsFetchingAC(false))
            dispatch(SetUsersAC(res.items))
            dispatch(SetTotalUsersCountAC(res.totalCount))
        })
}
export const changeCurrentPageTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(ToggleIsFetchingAC(true))
    dispatch(SetCurrentPageAC(currentPage))
    getUsers(currentPage, pageSize)
        .then((res) => {
            dispatch(ToggleIsFetchingAC(false))
            dispatch(SetUsersAC(res.items))
        })
}
export const unFollowUserTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(ToggleIsFollowingAC(true, id))
    unFollowUsers(id)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(UnFollowAC(id))
            }
            dispatch(ToggleIsFollowingAC(false, id))
        })
}
export const followUserTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(ToggleIsFollowingAC(true, id))
    followUsers(id)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(FollowAC(id))
            }
            dispatch(ToggleIsFollowingAC(false, id))
        })
}
