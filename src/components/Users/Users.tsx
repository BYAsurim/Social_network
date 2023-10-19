import React from 'react';
import {UsersPropsType} from "./UsersConteiner";
import s from './users.module.css'
import {v1} from "uuid";


const Users: React.FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {

    if (users.length === 0) {
        setUsers(
            [
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
                    followed: false,
                    fullName: 'Mohammed',
                    status: 'Excited for the future',
                    location: {city: 'Dubai', country: 'United Arab Emirates'}
                },
                {
                    id: v1(),
                    followed: false,
                    fullName: 'Sofia',
                    status: 'Grateful for everything',
                    location: {city: 'Rome', country: 'Italy'}
                },
                {
                    id: v1(),
                    followed: false,
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
            ]
        )
    }


    const unFollowHandler = (id: string) => {

        unFollow(id)

    }
    const FollowHandler = (id: string) => {
        follow(id)
    }


    return (
        <div>
            <h3 className={s.title}>Users:</h3>

            {users.map(u => <div key={u.id} className={s.wrapper}>
                <div className={s.imgAndButton}>
                    <div>
                        <img className={s.photo} src="http://avotarov.ru/picture/avatar-80/kartinki/719.jpg" alt="img"/>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => {
                                    unFollowHandler(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    FollowHandler(u.id)
                                }}>Follow</button>
                        }

                    </div>

                </div>
                <div className={s.content}>
                    <div className={s.nameAndStatus}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </div>
                </div>
            </div>)}
            <button className={s.button}>Show more</button>
        </div>
    );
};

export default Users;