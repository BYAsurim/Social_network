import React from "react";
import s from "./Post.module.css";
import {PropsTypePost} from "../../../index";





const Post = (props: PropsTypePost) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg"
                    alt=""
                />
                {props.post}
            </div>
            <button>Like</button>
            {props.likecount}
        </div>
    );
};

export default Post;
