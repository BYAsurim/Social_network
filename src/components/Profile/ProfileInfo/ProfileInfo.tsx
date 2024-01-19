import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import {ProfilePropsType} from "../../../redax/profileReducer";
import {ProfileStatus} from "./ProfileStatus";
import img from '../../../images/samurai.jpg'
import {ProfileDataForm, ProfileFormDataType} from "./ProfileDataForm";


type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfilePropsType
    status: string
    editMode: boolean
    upDateStatus: (status: string) => void
    changeStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileFormDataType) => void
    profileEditMode: (value: boolean) => void

}

const ProfileInfo = ({
                         profile,
                         status,
                         editMode,
                         upDateStatus,
                         changeStatus,
                         isOwner,
                         savePhoto,
                         saveProfile,
                         profileEditMode
                     }: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget?.files?.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }
    const onSubmit = (formData: ProfileFormDataType) => {
        saveProfile(formData)
    }

    return (
        <div className={s.container}>
            <div className={s.photoContainer}>
                <img src={profile.photos?.large || img} alt={'image'} className={s.photo}/>
                {isOwner &&
                    <input placeholder={'ava'}
                           type={'file'}
                           onChange={mainPhotoSelected}
                           className={s.photoInput}
                    />}
            </div>
            <div className={s.nameAndAbout}>
                <span className={s.fullName}> {profile.fullName} </span>
                {/*<span> {profile.aboutMe} </span>*/}
                <div className={s.status}>
                    <ProfileStatus
                        status={status}
                        upDateStatus={upDateStatus}
                        changeStatus={changeStatus}
                    />
                </div>
                <div className={s.line}></div>
                <div className={s.profileData}>
                    {
                        editMode ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit}/> :
                            <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                                profileEditMode(true)
                            }}/>
                    }
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;

type ProfileDataPropsType = {
    profile: ProfilePropsType
    isOwner: boolean
    goToEditMode: () => void

}
export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    return <div>
        <div className={s.contactsTitle}>
            <div className={s.title}>Info about job</div>
            {isOwner &&
                <div>
                    <button onClick={goToEditMode} className={s.contactsButton}>edit contacts</button>
                </div>}
        </div>
        <div className={s.containerText}>
            <b className={s.text}> Looking for a job:</b>
            <div className={s.italic}> {profile.lookingForAJob ? `yes` : `no`}</div>
        </div>
        {profile.lookingForAJob &&
            <div className={s.containerText}>
                <b className={s.text}> My Professional skills:</b>
                <div className={s.italic}> {profile.lookingForAJobDescription}</div>
            </div>
        }

        <div className={s.containerText}>
            <b className={s.text}> About me:</b>
            <div className={s.italic}> {profile.aboutMe} </div>
        </div>
        <div>

            <div className={s.title}> Contacts:</div>


            {Object.entries(profile.contacts || {}).map(([key, value]) => {
                return <Contact key={key}
                                ContactTitle={key}
                                ContactValue={value}
                />
            })}
        </div>

    </div>
}


type ContactPropsType = {
    ContactTitle: string
    ContactValue: string | null

}
export const Contact = ({ContactTitle, ContactValue}: ContactPropsType) => {
    return <>
        <div className={s.containerText}>
            <b className={s.text}>{ContactTitle}:</b>  <div className={s.italic}>{ContactValue}</div>
        </div>
    </>
}