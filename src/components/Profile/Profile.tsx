import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {ProfilePropsType} from "../../redax/profileReducer";
import {ProfileFormDataType} from "./ProfileInfo/ProfileDataForm";
import s from './Profile.module.css'

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
        <div className={s.profile}>
            <ProfileInfo {...props} />
            <MyPostsConteiner/>
        </div>
    );
};

export default Profile;
