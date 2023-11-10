import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import {ProfilePropsType} from "../../../redax/profileReduser";
import {ProfileContainerPropsType} from "../ProfileContainer";


type ProfileInfoPropsType = {
    profile: ProfilePropsType
}

const ProfileInfo = (props: ProfileContainerPropsType) => {

    if (!props.photos) {
        return <Preloader/>
    }
    let photo = props.photos.large
    return (
        <div className={s.container}>
            {/*<img*/}
            {/*    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWYenGebfzJCuwiR4WdjzTzI7BdavwbbeHA&usqp=CAU"*/}
            {/*    alt=""*/}
            {/*/>*/}
            <img src={props.photos.large}/>
            <div className={ s.nameAndAbout}>
            <span> {props.fullName} </span>
            <span> {props.aboutMe} </span>
            </div>
            {/*<div className={s.descriptionBlock}>Ava + description</div>*/}
        </div>
    );
};

export default ProfileInfo;