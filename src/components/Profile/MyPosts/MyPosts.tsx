import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {AppStateType} from "../../../redax/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import InputControls from "../../common/FormsControl/FormsControl";


type MyPostsPropsType = {
    addPost: (post: string) => void
    profilePage: AppStateType
}


const MyPosts = (props: MyPostsPropsType) => {

    const onAddPost = (value: FormDataType) => {
        props.addPost(value.newPost)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                My posts
            </div>
            <AddPostsForm onSubmit={onAddPost}/>

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


type FormDataType = {
    newPost: string
}
const maxLength10 = maxLengthCreator(10)

const PostsForm = (props: InjectedFormProps<FormDataType>) => {

    return <div className={s.inputButton}>
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Post message'}
                   name={'newPost'}
                   component={InputControls}
                   className={s.inputField}
                   validate={[requiredField, maxLength10]}

            />
            <div>
                <button className={s.sendButton}>Add post</button>
            </div>
        </form>
    </div>
}
const AddPostsForm = reduxForm<FormDataType>({
    form: 'AddPostsForm',
    //fields: [] // all the fields in your form
})(PostsForm)