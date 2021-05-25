import React from "react";
import FormInputError from "../formInputError";
import styles from "./formInput.module.scss";


const FormInput = ({ field, form: { errors, touched }, ...props }) => {
    const { formname } = props;
    return (
        <div className={
            formname === 'appointment'
            ? `${styles.wrapper} `
            : formname === 'feedback'
                ? `${styles.full_wrapper}`
                : 'incorrect form'}>
            <div className={
                formname === 'appointment'
                ? `${styles.wrapper_input} `
                : formname === 'feedback'
                    ? `${styles.full_wrapper_input}`
                    : 'incorrect form'}>
                <label className={styles.formInput_label}>
                    <input
                        className={styles.formInput}
                        {...field}
                        {...props}
                    />
                </label>
            </div>
            <div>
            {touched[field.name] && errors[field.name] ? (
                <FormInputError
                    errorMessage={errors[field.name]}
                />
            ) : null}
            </div>
        </div>
    );
};

export default FormInput;
