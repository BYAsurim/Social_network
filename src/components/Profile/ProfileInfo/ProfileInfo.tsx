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
            <div>
                <img src={profile.photos?.large || img} alt={'image'}/>
                {isOwner &&
                    <input placeholder={'ava'} type={'file'} onChange={mainPhotoSelected} className={s.photoInput}/>}
            </div>


            <div className={s.nameAndAbout}>
                <span> {profile.fullName} </span>
                {/*<span> {profile.aboutMe} </span>*/}

                <ProfileStatus
                    status={status}
                    upDateStatus={upDateStatus}
                    changeStatus={changeStatus}
                />
                {
                    editMode ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit}/> :
                        <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                            profileEditMode(true)
                        }}/>
                }
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
        {isOwner &&
            <div>
                <button onClick={goToEditMode}>edit mode</button>
            </div>}
        <div>
            <b> Looking for a job:</b> {profile.lookingForAJob ? `yes` : `no`}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b> My Professional skills:</b> {profile.lookingForAJobDescription}
            </div>
        }

        <div>
            <b> About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b> Contacts:</b> {Object.entries(profile.contacts || {}).map(([key, value]) => {
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
        <div style={{paddingLeft: '10px'}}>
            <b>{ContactTitle}</b>: {ContactValue}
        </div>
    </>
}