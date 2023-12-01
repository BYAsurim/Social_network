import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type FormDataType = {
    login:string
    password:string
    rememberME:boolean
}
export const Login = () => {
const onSubmit = (formData:FormDataType)=>{
    console.log(formData)
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
                <Field placeholder={'login'} name={'login'}  component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberME'} placeholder={'login'} component={'input'} />
            </div>
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
