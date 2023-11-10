import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType = {}

const Profile = (props: ProfileContainerPropsType) => {



    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsConteiner/>


        </div>
    );
};

export default Profile;
