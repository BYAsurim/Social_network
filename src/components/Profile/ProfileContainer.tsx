import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePropsType, setUserProfileAC} from "../../redax/profileReduser";
import {AppStateType} from "../../redax/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


export type ProfileContainerPropsType = ProfilePropsType & MapDispatchToProps
// type MapStateToProps = {
//     profile: ProfilePropsType
// }

type MapDispatchToProps = {
    setUserProfileAC: (profile: ProfilePropsType) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType, unknown> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios.get<ProfilePropsType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.setUserProfileAC(res.data)
            })

    }
    render() {

        return (
            <div>
                <Profile {...this.props}  />
            </div>
        );
    }

};

// let MapStatetoProps = (state: AppStateType) => ({profile: state.profileReduser.profile})
let MapStatetoProps = (state: AppStateType) => state.profileReduser.profile

const ComponetWithRouser = withRouter(ProfileContainer)
export default connect(MapStatetoProps, {
    setUserProfileAC
})(ComponetWithRouser);
