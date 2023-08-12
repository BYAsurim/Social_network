import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts  from "./MyPosts/MyPosts";
import { PostPropsTypeArray} from "../../redax/state";




type ProfilePropsType = PostPropsTypeArray


const Profile = (props:ProfilePropsType) => {

    return (
        <div>

                <ProfileInfo/>
                <MyPosts posts={props.posts} />


        </div>
    );
};

export default Profile;
