import React from "react";
import FormInputError from "../formInputError";
import styles from "./formInput.module.scss";


const FormInput = ({ field, form: { errors, touched }, ...props }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_input}>
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
