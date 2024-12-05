// import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import styles from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("email", "Email", Input, [required])}
            {createField("password", "Password", Input, [required], "password")}
            {createField("rememberMe", null, "input", [], "checkbox", " remember me")}
 
            {/* <div>
                <Field
                    name={"email"}
                    placeholder={"Email"}
                    component={Input}
                    validate={[required]} />
            </div>
            
            <div>
                <Field
                    name={"password"}
                    placeholder={"Password"}
                    component={Input}
                    validate={[required]}
                    type={"password"} />
            </div>
            
            <div>
                <Field
                    name={"rememberMe"}
                    component={"input"}
                    type={"checkbox"} />
                {' remember me'}
            </div> */}
            
            {
                props.error && <div className={styles.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        // console.log(formData.email, formData.password, formData.rememberMe);
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);