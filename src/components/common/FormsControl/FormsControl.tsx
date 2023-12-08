import React, {InputHTMLAttributes} from 'react';
import s from './FormsControl.module.css'
import {InjectedFormProps} from "redux-form/lib/reduxForm";

type InputControlsType = {
    input: InputHTMLAttributes<HTMLInputElement>
    meta: InjectedFormProps & {touched: boolean}
}
// Pick<InjectedFormProps, 'error' | 'touch'>
const InputControls: React.FC<InputControlsType> = ({
                                                        input,
                                                        meta,
                                                        ...props

                                                    }) => {

    const hasError = meta.error && meta.touched
    return (

        <div className={s.formControl + ' ' + hasError ?  s.error : ''}>
            <div>
                <input {...props} {...input} />
            </div>
            {
                hasError &&
                <span className={s.error}> {meta.error}</span>
            }

        </div>
    );
};

export default InputControls;