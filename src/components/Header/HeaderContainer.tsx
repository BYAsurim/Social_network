import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {authMeTC, logOutTC} from "../../redax/authReduser";


export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    isAuth: boolean,
    login: string

}

type MapDispatchToProps = {
    // SetAuthUserDataAC: (id: number, email: string, login: string) => void
    authMe: () => void
    logOut: () => void
}

// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'e7e3f008-e2dc-4435-835d-1184d4097cbd'
//     }
// })

class HeaderContainer extends React.Component<HeaderContainerPropsType, unknown> {

    componentDidMount() {
        // instance.get(`auth/me`)
        //     .then((res) => {
        //         if (res.data.resultCode === 0) {
        //             let {id, login, email} = res.data.data
        //             this.props.SetAuthUserDataAC(id, email, login)
        //         }
        //     })
        this.props.authMe()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logOut={this.props.logOut}/>
        )
    }
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

export default connect(MapStateToProps, {
    authMe: authMeTC,
    logOut: logOutTC
})(HeaderContainer);