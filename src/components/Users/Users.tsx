import React from 'react';
import {UsersPropsType} from "./UsersConteiner";
import s from './users.module.css'
import axios from "axios";
import photo from '../../images/images.jpg'
import {UsersPageType} from "../../redax/usersReduser";


class Users extends React.Component<UsersPropsType, Array<UsersPageType>> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    changeCurrentPageHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount && i <= 10; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={s.selectedPageContainer}>
                    {pages.map(p => {
                        const activePage = this.props.currentPage === p ? s.selectedPage : ''
                        return (<span key={p} className={activePage}
                                      onClick={() => {
                                          this.changeCurrentPageHandler(p)
                                      }}>
                        {p}
                    </span>)
                    })
                    }
                </div>

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
                                    <button onClick={() => {
                                        this.props.follow(u.id)
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
    }
}

export default Users;