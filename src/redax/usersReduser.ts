
export type UsersPageType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    uniqueUrlName:string,
    location: LocationType,
    photos:PhotosType
 }
type PhotosType = {
    small: string,
    large: string
}
 //export type UsersPageType = {
//     id: string,
//     followed: boolean,
//     fullName: string,
//     status: string,
//     location: LocationType,
// }
type LocationType = {
    city: string,
    country: string
}
type ActionsType = ReturnType<typeof FollowAC> | ReturnType<typeof UnFollowAC> |
    ReturnType<typeof SetUsersAC>

export  type IninitialStateType = typeof initialState
let initialState = {
     users: [
    //     {
    //         id: v1(),
    //         followed: true,
    //         fullName: 'Alexander',
    //         status: 'I am very well',
    //         location: {city: 'Vileyka', country: 'Belarus'},
    //     },
    //
    ] as Array<UsersPageType>,
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

export const usersReduser = (state: IninitialStateType = initialState, action: ActionsType): IninitialStateType => {
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
                ...state, users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }
}
