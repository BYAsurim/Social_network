import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, ProfilePropsType} from "../../redax/profileReduser";
import {AppStateType} from "../../redax/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    profile: ProfilePropsType
    isAuth: boolean
}

type MapDispatchToProps = {
    getProfile: (id: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType, unknown> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        // axios.get<ProfilePropsType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     .then((res) => {
        //         this.props.setUserProfileAC(res.data)
        //     })
        this.props.getProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }

}

// let MapStatetoProps = (state: AppStateType) => ({profile: state.profileReduser.profile})
let MapStatetoProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profileReduser.profile,
        isAuth: state.authReducer.isAuth
    }
}

const ComponetWithRouser = withRouter(ProfileContainer)
export default connect(MapStatetoProps, {
    getProfile: getProfileTC
})(ComponetWithRouser);
// export default compose<FC>(connect(MapStatetoProps, {
//     getProfile: getProfileTC
// }), withRouter)(ProfileContainer);
