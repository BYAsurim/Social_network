import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Posts/Post";
import {PostPropsTypeArray} from "../../../redax/state";


type MyPostsPropsType = PostPropsTypeArray


const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            alert(text)
        }
    }

    return (
        <div>
            <div className={s.postsBlock}>
                My posts
            </div>
            <textarea ref={newPostElement} className={s.input}></textarea>

            <div className={s.button}>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map((el) => {
                        return (
                            <Post id={el.id} post={el.post} likecount={el.likecount}/>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default MyPosts;