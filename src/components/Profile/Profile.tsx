import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts  from "./MyPosts/MyPosts";
import {PropsTypePostArray} from "../../index";



type ProfilePropsType = {
    posts:PropsTypePostArray
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>

                <ProfileInfo/>
                <MyPosts posts={props.posts} />


        </div>
    );
};

export default Profile;
