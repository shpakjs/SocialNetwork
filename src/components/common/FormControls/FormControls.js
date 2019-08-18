import React from 'react';
import styles from './FormControls.module.css';

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (<div className = {styles.formControl + " " + (hasError ? styles.error : '') }>
        <textarea {...input} {...props}></textarea>
        { hasError && <span>{meta.error}</span> }
    </div>);
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props}></textarea></FormControl>
} 
export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
} 