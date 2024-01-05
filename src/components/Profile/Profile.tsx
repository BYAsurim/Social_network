import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {ProfilePropsType} from "../../redax/profileReducer";

type ProfilePagePropsType = {
    isOwner:boolean
    profile: ProfilePropsType
    status: string
    upDateStatus: (status: string) => void
    changeStatus:(status: string) => void
    savePhoto: (file: File) => void
}

const Profile = (props: ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsConteiner/>
        </div>
    );
};

export default Profile;
