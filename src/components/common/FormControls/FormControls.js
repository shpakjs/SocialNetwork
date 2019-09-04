import React from 'react';
import styles from './FormControls.module.css';
import {Field} from 'redux-form';

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (<div className = {styles.formControl + " " + (hasError ? styles.error : '') }>
        <div>
            {props.children}
        </div>
        { hasError && <span>{meta.error}</span> }
    </div>);
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...props.input} {...restProps}></textarea></FormControl>
} 
export const Input = (props) => {
    const { input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...props.input} {...restProps}  /></FormControl>
} 
export const createField = (placeholder, name, validator, component, text, props) => {
    return <div><Field placeholder={placeholder} 
            component={component} 
            name={name}
            validate={validator}
            {...props}
            />{text}</div>
}