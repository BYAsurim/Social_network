import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, ProfilePropsType, SetStatusAC, setStatusTC, upDateStatusTC} from "../../redax/profileReducer";
import {AppStateType} from "../../redax/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    profile: ProfilePropsType
    isAuth: boolean
    status: string
    authorizedUserId: number
}

type MapDispatchToProps = {
    getProfile: (id: number) => void
    setStatus: (userId: number) => void
    upDateStatus: (status: string) => void
    changeStatus: (status: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType, unknown> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) userId = this.props.authorizedUserId
        if (!userId) this.props.history.push('/login')
        this.props.getProfile(userId)
        this.props.setStatus(userId)
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    upDateStatus={this.props.upDateStatus}
                    changeStatus={this.props.changeStatus}
                />
            </div>
        );
    }

}

// let MapStatetoProps = (state: AppStateType) => ({profile: state.profileReduser.profile})
let MapStatetoProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profileReducer.profile,
        isAuth: state.authReducer.isAuth,
        status: state.profileReducer.status,
        authorizedUserId: state.authReducer.id
    }
}

// const ComponetWithRouser = withRouter(ProfileContainer)
// const AuthRedirectComponent = WithAuthRedirect(ComponetWithRouser)
// export default connect(MapStatetoProps, {
//     getProfile: getProfileTC
// })(AuthRedirectComponent);
export default compose<FC>(
    connect(MapStatetoProps, {
        getProfile: getProfileTC,
        setStatus: setStatusTC,
        upDateStatus: upDateStatusTC,
        changeStatus: SetStatusAC
    }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer);
