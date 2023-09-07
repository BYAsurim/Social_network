import React from 'react';
import s from './BestFriends.module.css'
import {StatePropsType} from "../../redax/state";

type BestFriendsPropsType = {
    state: StatePropsType
}

const BestFriends = (props: BestFriendsPropsType) => {
    return (

        <div className={s.content}>
            {
                props.state.sidebar.friends.map(el => {
                    return (<div className={s.img_text} key={el.id} >

                            <img className={s.img}
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DYBCe6d6WD6gwCB2nTxKcrelhLyYnj-yCA&usqp=CAU"
                                 alt=""/>
                            <div >{el.name}</div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default BestFriends;