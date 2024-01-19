import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileTC, ProfileEditModeAC,
    ProfilePropsType,
    savePhotoTC, saveProfileTC,
    SetStatusAC,
    setStatusTC,
    upDateStatusTC
} from "../../redax/profileReducer";
import {AppStateType} from "../../redax/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileFormDataType} from "./ProfileInfo/ProfileDataForm";


export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    profile: ProfilePropsType
    isAuth: boolean
    status: string
    authorizedUserId: number | null
    editMode:boolean
}

type MapDispatchToProps = {
    getProfile: (id: number | null) => void
    setStatus: (userId: number | null) => void
    upDateStatus: (status: string) => void
    changeStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileFormDataType)=> void
    profileEditMode: (value:boolean) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType, unknown> {

    refreshProfile() {
        let userId : number | null = +this.props.match.params.userId
        if (!userId) userId = this.props.authorizedUserId
        // if (!userId) this.props.history.push('/login')  // рудирект на логин невозможно зайти на профайл
        this.props.getProfile(userId)
        this.props.setStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<unknown>, snapshot?: any) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }


    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    editMode={this.props.editMode}
                    profile={this.props.profile}
                    status={this.props.status}
                    upDateStatus={this.props.upDateStatus}
                    changeStatus={this.props.changeStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                    profileEditMode={this.props.profileEditMode}
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
        authorizedUserId: state.authReducer.id,
        editMode: state.profileReducer.profileEditMode
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
        savePhoto: savePhotoTC,
        saveProfile: saveProfileTC,
        changeStatus: SetStatusAC,
        profileEditMode: ProfileEditModeAC
    }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer);
