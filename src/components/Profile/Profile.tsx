import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsType, PostPropsTypeArray} from "../../redax/state";


type ProfilePropsType = {
    profilePage: PostPropsTypeArray
    dispatch: (action: ActionsType) => void
}


const Profile = (props: ProfilePropsType) => {

    return (
        <div>

            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}

            />


        </div>
    );
};

export default Profile;
