import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputControls from "../../common/FormsControl/FormsControl";
import {requiredField} from "../../../utils/validators/validators";
import {ProfilePropsType} from "../../../redax/profileReducer";


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
            <button>save</button>
        </div>
        {error && <div style={{
            border: "solid rgba(255, 60, 0, 0.95) 1px",
            padding: '5px',
            color: '#ad1414',
            width: '200px',
        }}>{error}</div>}
        <div>
            <b> Full name</b>
            <Field name={'fullName'}
                   placeholder={'fullName'}
                   component={InputControls}
                   validate={[requiredField]}
            />
        </div>

        <div>
            <b> Looking for a job:</b> <Field name={'lookingForAJob'}
                                              type="checkbox"
                                              component={InputControls}
                                              validate={[requiredField]}
        />
        </div>


        <div>
            <b> My Professional skills:</b>
            <Field name={'lookingForAJobDescription'}
                   placeholder={'Professional skills'}
                   component={InputControls}
                   validate={[requiredField]}
            />
        </div>
        <div>
            <b> About me:</b>
            <Field name={'aboutMe'}
                   placeholder={'About me'}
                   component={InputControls}
                   validate={[requiredField]}
            />
        </div>
        <div>
            <b> Contacts:</b> {Object.entries(profile.contacts || {}).map(([key, value]) => {
            return <div style={{paddingLeft: '10px'}} key={key}>
                <b>{key}</b>: <Field name={`contacts.${key}`}
                                     placeholder={`${value}`}
                                     component={InputControls}

            />
            </div>
        })}
        </div>

    </form>
}

export const ProfileDataForm = reduxForm<ProfileFormDataType, ProfileFormPropsType>({
    form: 'ProfileData',
    //fields: [] // all the fields in your form
})(ProfileForm);