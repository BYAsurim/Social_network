import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {AppStore} from "../../redax/redux-store";


type ProfilePropsType = {
    // profilePage: PostPropsTypeArray
    // dispatch: (action: ActionsType) => void
    store:AppStore
}


const Profile = (props: ProfilePropsType) => {

    return (
        <div>

            <ProfileInfo/>
            {/*<MyPosts profilePage={props.profilePage}*/}
            {/*         dispatch={props.dispatch}*/}

            {/*/>*/}
            <MyPostsConteiner
                // profilePage={props.profilePage}
                //               dispatch={props.dispatch}
                store={props.store}
            />


        </div>
    );
};

export default Profile;
