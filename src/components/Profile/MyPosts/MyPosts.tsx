import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Posts/Post";
import {ActionsType, addPostAC, PostPropsTypeArray, UpDateNewTextPostAC} from "../../../redax/state";


type MyPostsPropsType = {
    profilePage: PostPropsTypeArray
    dispatch: (action: ActionsType) => void
    // addPost: () => void
    // upDateNewPostText: (text: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        // if (newPostElement.current) {
        //     props.addPost(newPostElement.current.value)
        //     // newPostElement.current.value = ''
        // }
        if (newPostElement.current) {
            // props.dispatch({type: 'ADD-POST', newPost: newPostElement.current.value  })
            props.dispatch(addPostAC(newPostElement.current.value))
            newPostElement.current.value = ''
        }

    }
    const changeInputHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value;
            // props.upDateNewPostText(text)
            // props.dispatch({type: "NEW-POST-TEXT", text})
            props.dispatch(UpDateNewTextPostAC(text))
        }
    }
    // const changeInputHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    //     props.addPost(e.currentTarget.value)
    // }

    return (
        <div>
            <div className={s.postsBlock}>
                My posts
            </div>
            <textarea className={s.input} ref={newPostElement} onChange={changeInputHandler}
                      value={props.profilePage.newPostText}></textarea>

            <div className={s.button}>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    props.profilePage.posts.map((el) => {
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