import React from 'react';
import {UsersPropsType} from "./UsersConteiner";
import s from './users.module.css'
import axios from "axios";
import photo from '../../images/images.jpg'
import {UsersPageType} from "../../redax/usersReduser";

class Users extends React.Component<UsersPropsType, Array<UsersPageType>>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res)=>{
                this.props.setUsers(res.data.items)
            })
    }

    //
    // getUSers = () =>{
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then((res)=>{
    //                this.props.setUsers(res.data.items)
    //             })
    //     }
    // }

    render() {
        return (
            <div>
                {/*<button className={s.title} onClick={this.getUSers}>get users:</button>*/}

                {this.props.users.map(u => <div key={u.id} className={s.wrapper}>
                    <div className={s.imgAndButton}>
                        <div>
                            <img className={s.photo} src={u.photos.small === null ? photo : u.photos.small} alt="img"/>
                        </div>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        this.props.unFollow(u.id)
                                    }}>UnFollow</button> :
                                    <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>
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
    }
}

export default Users;