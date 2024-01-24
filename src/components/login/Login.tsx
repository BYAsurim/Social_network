import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputControls from "../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redax/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redax/redux-store";
import s from './login.module.css'

type FormDataType = {
    email: string
    password: string
    rememberME: boolean
    captcha: string
}
type LoginPropsType = {
    isAuth: boolean
    captchaURL: string | null
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login = (props: LoginPropsType) => {


    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberME, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return (
        <div className={s.loginContainer}>
            <h1 className={s.loginTitle}>Sign In</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    );
};

type LoginFormType = {
    captchaURL: string | null
}
export const LoginForm = ({
                              handleSubmit,
                              error,
                              captchaURL
                          }: LoginFormType & InjectedFormProps<FormDataType, LoginFormType>) => {
    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
            <div>
                <div>
                    <div className={s.text}>Email</div>
                </div>
                <Field
                    // placeholder={'Email'}
                       name={'email'}
                       component={InputControls}
                       validate={[requiredField]}
                       className={s.field}
                />

            </div>
            <div>
                <div className={s.text}>Password</div>
                <Field
                       name={'password'}
                       type={'password'}
                       component={InputControls}
                       validate={[requiredField]}
                       className={s.field}
                />

            </div>
            <div className={s.checkBoxContainer}>
                <Field type="checkbox"
                       name={'rememberME'}
                       placeholder={'login'}
                       component={InputControls}
                       className={s.checkbox}
                />
                <div>Remember Me!</div>
            </div>
            {captchaURL && <img src={captchaURL} alt={'captcha'}/>}
            {captchaURL && <Field placeholder={'Anti bot symbols'}
                                  name={'captcha'}
                                  component={InputControls}
                                  validate={[requiredField]}
            />}
            {error && <div className={s.formSomeError}>
                {error}
            </div>}
            <div>
                <button className={s.buttonLogin}>Login</button>
            </div>
        </form>

    );
};
const LoginReduxForm = reduxForm<FormDataType, LoginFormType>({
    form: 'login',
    //fields: [] // all the fields in your form
})(LoginForm);

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth,
    captchaURL: state.authReducer.captchaURL
})
export default connect(mapStateToProps, {loginTC})(Login)
