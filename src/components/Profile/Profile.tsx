import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts  from "./MyPosts/MyPosts";
import {PostPropsType} from "../../redax/state";




type ProfilePropsType = {
    posts: PostPropsType[]
    addPost: (post:string)=>void
}



const Profile = (props:ProfilePropsType) => {

    return (
        <div>

                <ProfileInfo/>
                <MyPosts posts={props.posts} addPost={props.addPost} />


        </div>
    );
};

export default Profile;
