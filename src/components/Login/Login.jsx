import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"login"}
                    placeholder={"Login"}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder={"Password"}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field
                    name={"rememberMe"}
                    component={"input"}
                    type={"checkbox"} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;