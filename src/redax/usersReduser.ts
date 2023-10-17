import {v1} from "uuid";


export type UsersPageType = {
    id: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType,
}
type LocationType = {
    city: string,
    country: string
}
type ActionsType = ReturnType<typeof FollowAC> | ReturnType<typeof UnFollowAC> |
    ReturnType<typeof SetUsersAC>

export  type IninitialStateType = typeof initialState
let initialState = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: 'Alexander',
            status: 'I am very well',
            location: {city: 'Vileyka', country: 'Belarus'},
        },
        {
            id: v1(),
            followed: true,
            fullName: 'John',
            status: 'Feeling great!',
            location: {city: 'New York', country: 'United States'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Emma',
            status: 'Enjoying life',
            location: {city: 'London', country: 'United Kingdom'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Luisa',
            status: 'Feeling positive',
            location: {city: 'Paris', country: 'France'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Mohammed',
            status: 'Excited for the future',
            location: {city: 'Dubai', country: 'United Arab Emirates'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Sofia',
            status: 'Grateful for everything',
            location: {city: 'Rome', country: 'Italy'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Hiroshi',
            status: 'Energized and motivated',
            location: {city: 'Tokyo', country: 'Japan'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Elena',
            status: 'Finding joy in little things',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ] as Array<UsersPageType>,
}
export const FollowAC = (id: string) => {
    return {
        type: 'FOLLOW',
        id
    } as const
}
export const UnFollowAC = (id: string) => {
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
