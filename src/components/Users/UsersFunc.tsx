import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import photo from '../../images/images.jpg'

const Users: React.FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {
const getUSers = () =>{
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res)=>{
                setUsers(res.data.items)
            })
    }
    }

    const unFollowHandler = (id: number) => {
        unFollow(id)
    }
    const FollowHandler = (id: number) => {
        follow(id)
    }


    return (
        <div>
            <button className={s.title} onClick={getUSers}>get users:</button>

            {users.map(u => <div key={u.id} className={s.wrapper}>
                <div className={s.imgAndButton}>
                    <div>
                        <img className={s.photo} src={u.photos.small === null ? photo : u.photos.small} alt="img"/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>

                    </div>
                </div>
            </div>)}
            <button className={s.button}>Show more</button>
        </div>
    );
};

export default Users;