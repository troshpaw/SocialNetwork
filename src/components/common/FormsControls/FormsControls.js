import styles from './FormsControls.module.css';
import { Field } from 'redux-form';

export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

// const FormControl = ({input, meta, child, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 {props.children}
//             </div>
//             { hasError && <span>{meta.error}</span> }
//         </div>
//     )
// }

// export const Textarea = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
// }

// export const Input = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
// }

export const createField = (name, placeholder, component, validate, type, text = '') => (
    <div>
        <Field name={name} placeholder={placeholder} component={component} validate={validate} type={type} />
        {text}
    </div>
)