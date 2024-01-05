import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import {ProfilePropsType} from "../../../redax/profileReducer";
import {ProfileStatus} from "./ProfileStatus";
import img from '../../../images/samurai.jpg'


type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfilePropsType
    status: string
    upDateStatus: (status: string) => void
    changeStatus: (status: string) => void
    savePhoto: (file: File) => void
}

const ProfileInfo = ({profile, status, upDateStatus, changeStatus, isOwner, savePhoto}: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget?.files?.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div className={s.container}>
            <div>
                <img src={profile.photos?.large || img} alt={'image'}/>
                {isOwner &&
                    <input placeholder={'ava'} type={'file'} onChange={mainPhotoSelected} className={s.photoInput}/>}
            </div>
            <div className={s.nameAndAbout}>
                <span> {profile.fullName} </span>
                <span> {profile.aboutMe} </span>
                <ProfileStatus
                    status={status}
                    upDateStatus={upDateStatus}
                    changeStatus={changeStatus}
                />


            </div>
            {/*<div className={s.descriptionBlock}>Ava + description</div>*/}
        </div>
    );
};

export default ProfileInfo;