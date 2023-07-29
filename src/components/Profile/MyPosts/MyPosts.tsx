import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Posts/Post";
import {PropsTypePostArray} from "../../../index";


type MyPostsPropsType = {
    posts:PropsTypePostArray
}



const MyPosts = (props:MyPostsPropsType) => {
    // const posts = [
    //     { id: v1(), post: "Сегодня замечательный день!", likecount: 10 },
    //     { id: v1(), post: "Наконец-то закончил проект!", likecount: 25 },
    //     { id: v1(), post: "Как же я люблю путешествовать!", likecount: 15 },
    //     { id: v1(), post: "Вчера был на концерте своей любимой группы!", likecount: 30 },
    //     { id: v1(), post: "Новый курс по JavaScript на IT-KAMASUTRA просто потрясающий!", likecount: 20 }
    // ];

    return (
        <div>
            <div className={s.postsBlock}>
               My posts
            </div>
            <input value={'taps message'} className={s.input}/>
            <div className={s.button}>
            <button>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map((el)=>{
                     return(
                         <Post id={el.id} post={el.post} likecount={el.likecount}/>
                     )
                    })
                }
            {/*// <Post message={'I like it!'} likeCounts={30}/>*/}
            {/*// <Post message={'This is my first post'} likeCounts={10}/>*/}
            {/*// <Post message={'Amazing! ! !'} likeCounts={11}/>*/}
            </div>
        </div>
    );
};

export default MyPosts;