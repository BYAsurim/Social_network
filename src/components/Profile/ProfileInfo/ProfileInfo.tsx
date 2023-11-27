import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import {ProfilePropsType} from "../../../redax/profileReduser";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfilePropsType
}

const ProfileInfo = ({profile}: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.container}>
            {/*<img*/}
            {/*    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWYenGebfzJCuwiR4WdjzTzI7BdavwbbeHA&usqp=CAU"*/}
            {/*    alt=""*/}
            {/*/>*/}
            <img src={profile.photos?.large} alt={'image'}/>
            <div className={s.nameAndAbout}>
                <span> {profile.fullName} </span>
                <span> {profile.aboutMe} </span>
                <ProfileStatus status={'status here!'}/>

            </div>
            {/*<div className={s.descriptionBlock}>Ava + description</div>*/}
        </div>
    );
};

export default ProfileInfo;