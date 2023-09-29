import React from 'react';
import {addPostAC, UpDateNewTextPostAC} from "../../../redax/profileReduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


type MyPostsPropsType = {
    // profilePage: PostPropsTypeArray
    // dispatch: (action: ActionsType) => void
    // store:AppStore
}


const MyPostsContainer = (props: MyPostsPropsType) => {


    return (
        <StoreContext.Consumer>{
            (store) => {

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const onPostChange = (text: string) => {
                    store.dispatch(UpDateNewTextPostAC(text))
                }


                return <div>
                    <MyPosts
                        onPostChange={onPostChange}
                        addPost={addPost}
                        profilePage={store.getState().profileReduser}
                    />
                </div>
            }

        }</StoreContext.Consumer>
    );
};

export default MyPostsContainer;