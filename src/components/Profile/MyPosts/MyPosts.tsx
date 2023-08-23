import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "../Posts/Post";
import {PostPropsType} from "../../../redax/state";



type MyPostsPropsType = {
    posts: PostPropsType[],
    addPost: (post:string)=>void
}


const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value= ''
        }
    }
    const changeInputHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.addPost(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                My posts
            </div>
            <textarea ref={newPostElement} className={s.input} onChange={changeInputHandler}></textarea>

            <div className={s.button}>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map((el) => {
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