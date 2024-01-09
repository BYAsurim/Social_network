import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {ProfilePropsType} from "../../redax/profileReducer";
import {ProfileFormDataType} from "./ProfileInfo/ProfileDataForm";

type ProfilePagePropsType = {
    isOwner:boolean
    editMode:boolean
    profile: ProfilePropsType
    status: string
    upDateStatus: (status: string) => void
    changeStatus:(status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileFormDataType)=> void
    profileEditMode: (value:boolean) => void
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
