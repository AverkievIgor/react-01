import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validator/validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-Reducer";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    validate={[required, maxLength20]}
                    name="email"
                    placeholder="email"/>
            </div>
            <div>
                <Field
                    component={Input}
                    validate={[required, maxLength20]}
                    name={"password"}
                    placeholder={"Password"}
                    type = {"password"}/>
            </div>
            <div>
                <Field
                    component={Input}
                    name={"rememberMe"}
                    type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) =>{
    const onSubmit = (FormData) => {
       props.login(FormData.email, FormData.password, FormData.rememberMe);
    }
    if(props.isAuth) return <Redirect to={"/messages"}/>
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {login})(Login);