import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputControls from "../../common/FormsControl/FormsControl";
import {requiredField} from "../../../utils/validators/validators";
import {ProfilePropsType} from "../../../redax/profileReducer";
import s from './ProfileDataForm.module.css'


export type ProfileFormDataType = {
    LookingJob: boolean
    professionalSkills: string
    aboutMe: string
    fullName: string
}
type ProfileFormPropsType = {
    profile: ProfilePropsType
}
const ProfileForm = ({
                         handleSubmit,
                         profile,
                         error
                     }: ProfileFormPropsType & InjectedFormProps<ProfileFormDataType, ProfileFormPropsType>) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button className={s.button}>save data</button>
        </div>
        {error && <div className={s.error}>{error}</div>}
        <div className={s.fieldContainer}>
            <b> Full name: </b>
            <div>
                <Field name={'fullName'}
                       placeholder={'fullName'}
                       component={InputControls}
                       validate={[requiredField]}
                       className={s.field}
                />
            </div>
        </div>

        <div className={s.fieldContainer}>
            <b> Looking for a job: </b>
            <Field name={'lookingForAJob'}
                   type="checkbox"
                   component={InputControls}

            />
        </div>


        <div className={s.fieldContainer}>
            <b> My Professional skills: </b>
            <div>
                <Field name={'lookingForAJobDescription'}
                       placeholder={'Professional skills'}
                       component={InputControls}
                       validate={[requiredField]}
                       className={s.field}
                />
            </div>
        </div>
        <div className={s.fieldContainer}>
            <b> About me: </b>
            <div>
                <Field name={'aboutMe'}
                       placeholder={'About me'}
                       component={InputControls}
                       validate={[requiredField]}
                       className={s.field}
                />
            </div>
        </div>
        <div >
            <b> Contacts:</b> {Object.entries(profile.contacts || {}).map(([key, value]) => {
            return <div className={s.fieldContainer} key={key}>
                <b>{key}:   </b>
                <div>
                    <Field name={`contacts.${key}`}
                           placeholder={`${value}`}
                           component={InputControls}
                           className={s.field}
                    />
                </div>
            </div>
        })}
        </div>

    </form>
}

export const ProfileDataForm = reduxForm<ProfileFormDataType, ProfileFormPropsType>({
    form: 'ProfileData',
    //fields: [] // all the fields in your form
})(ProfileForm);