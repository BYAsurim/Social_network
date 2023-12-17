import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputControls from "../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redax/authReduser";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redax/redux-store";
import s from '../common/FormsControl/FormsControl.module.css'


type FormDataType = {
    email: string
    password: string
    rememberME: boolean
}
type LoginPropsType = {
    isAuth: boolean
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {


    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberME)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'}
                       name={'email'}
                       component={InputControls}
                       validate={[requiredField]}
                />

            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type={'password'}
                       component={InputControls}
                       validate={[requiredField]}
                />

            </div>
            <div>
                <Field type="checkbox"
                       name={'rememberME'}
                       placeholder={'login'}
                       component={InputControls}
                />

            </div>
            {props.error && <div className={s.formSomeError}>
                {props.error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>

    );
};
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login',
    //fields: [] // all the fields in your form
})(LoginForm);

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {loginTC})(Login)
