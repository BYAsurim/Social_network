import React from 'react';
import {UpDateNewTextPostAC, addPostAC} from "../../../redax/profileReduser";
import MyPosts from "./MyPosts";
import {AppStore} from "../../../redax/redux-store";


type MyPostsPropsType = {
    // profilePage: PostPropsTypeArray
    // dispatch: (action: ActionsType) => void
    store:AppStore
}


const MyPostsContainer = (props: MyPostsPropsType) => {


    const addPost = () => {
            props.store.dispatch(addPostAC())
        }

    const onPostChange = (text:string) => {
            props.store.dispatch(UpDateNewTextPostAC(text))
    }

    return (
        <div>
          <MyPosts
                   onPostChange={onPostChange}
                   addPost={addPost}
                   profilePage={props.store.getState().profileReduser}
          />
        </div>
    );
};

export default MyPostsContainer;