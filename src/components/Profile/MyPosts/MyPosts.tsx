import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {AppStateType} from "../../../redax/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputControls from "../../common/FormsControl/FormsControl";
import {Paper} from "@mui/material";


type MyPostsPropsType = {
    addPost: (post: string) => void
    profilePage: AppStateType
}


const MyPosts = (props: MyPostsPropsType) => {
    const onAddPost = (value: FormDataType) => {
        props.addPost(value.newPost)
        value.newPost = ''
    }

    return (
        <div className={s.myPostContainer}>
            <div className={s.postsBlock}>
                My posts
            </div>
            <AddPostsForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {
                    props.profilePage.profileReducer.posts.map((el) => {
                        return (
                            <Paper elevation={3}
                            className={s.postWrapper}
                            >
                                <Post key={el.id} id={el.id} name={el.name} post={el.post} likecount={el.likecount}/>
                            </Paper>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default MyPosts;


type FormDataType = {
    newPost: string
}


const PostsForm = (props: InjectedFormProps<FormDataType>) => {

    return <form onSubmit={props.handleSubmit}>
        <div className={s.inputButtonContainer}>
            <Field placeholder={'Post message'}
                   name={'newPost'}
                   component={InputControls}
                   className={s.inputField}
            />
            <div>
                <button className={s.sendButton}>Add post</button>
            </div>
        </div>
    </form>

}
const AddPostsForm = reduxForm<FormDataType>({
    form: 'AddPostsForm',
    //fields: [] // all the fields in your form
})(PostsForm)