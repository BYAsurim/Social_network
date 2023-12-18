import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {logOutTC} from "../../redax/authReducer";


export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    isAuth: boolean,
    login: string

}

type MapDispatchToProps = {
    logOut: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, unknown> {

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
    logOut: logOutTC
})(HeaderContainer);