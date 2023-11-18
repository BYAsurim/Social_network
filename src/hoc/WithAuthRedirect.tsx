import React, {ComponentType} from 'react';
import {AppStateType} from "../redax/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(MapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}

