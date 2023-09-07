import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts  from "./MyPosts/MyPosts";
import {PostPropsTypeArray} from "../../redax/state";




type ProfilePropsType = {
    profilePage: PostPropsTypeArray
    addPost: ()=>void
    upDateNewPostText: (text:string)=> void
}



const Profile = (props:ProfilePropsType) => {

    return (
        <div>

                <ProfileInfo/>
                <MyPosts profilePage={props.profilePage} addPost={props.addPost}  upDateNewPostText={props.upDateNewPostText}/>


        </div>
    );
};

export default Profile;
