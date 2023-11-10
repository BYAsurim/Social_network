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
    ReturnType<typeof SetCurrentPageAC>|
    ReturnType<typeof SetTotalUsersCountAC>|
    ReturnType<typeof ToggleIsFetchingAC>

export  type InitialStateType = typeof initialState
let initialState = {
    users: [] as Array<UsersPageType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
export const SetUsersAC = (users: any) => {
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
export const ToggleIsFetchingAC = (isFetching:boolean) => {
    return {
        type: 'SET-TOGGLE-IS-FETCHING',
        isFetching
    } as const
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

        default:
            return state
    }
}
