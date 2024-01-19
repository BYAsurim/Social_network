import React from "react";
import s from "./Post.module.css";
import {PostPropsType} from "../../../../redax/profileReducer";
import like from '../../../../images/like.png'


const Post = (props: PostPropsType) => {

    return (
        <div>
            <div className={s.item}>
                <div className={s.imgNameWrapper}>
                    <img
                        src="https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg"
                        alt=""
                    />
                    <div className={s.name}>{props.name}</div>
                </div>
                <div className={s.post}>
                    {props.post}
                </div>
            </div>
            <div className={s.like}>
                {/*<button className={s.like}>Like</button>*/}
                <img src={like} alt="#"/>

                {props.likecount}
            </div>
        </div>
    );
};

export default Post;
