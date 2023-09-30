import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

import {AppStateType} from "../../../redax/redux-store";



type MyPostsPropsType = {
    onPostChange: (text:string)=> void
    addPost: ()=>void
    profilePage: AppStateType
}


const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
       props.addPost()
    }
    const changeInputHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.onPostChange(text)
        }
    }

    return (
        <div>
            <div className={s.postsBlock}>
                My posts
            </div>
            <textarea className={s.input} ref={newPostElement} onChange={changeInputHandler}
                      value={props.profilePage.profileReduser.newPostText}></textarea>

            <div className={s.button}>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    props.profilePage.profileReduser.posts.map((el) => {
                        return (
                            <Post key={el.id} id={el.id} post={el.post} likecount={el.likecount}/>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default MyPosts;