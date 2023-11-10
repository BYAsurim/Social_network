import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {ProfilePropsType} from "../../redax/profileReduser";

type ProfilePagePropsType = {
    profile: ProfilePropsType
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
