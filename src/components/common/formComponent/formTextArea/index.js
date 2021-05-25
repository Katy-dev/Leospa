import { useField } from "formik";
import React from "react";
import styles from "./formTextArea.module.scss";

const FormTextArea = ({ ...props }) => {
    const [field, meta] = useField(props);
    const { formname } = props;
    return (
        <div className={styles.container}>
            <label>
                <textarea
                    className={
                        formname === 'appointment'
                        ? `${styles.notes_wrapper} `
                        : formname === 'feedback'
                            ? `${styles.notes_wrapper_feedback}`
                            : 'incorrect form'}
                    {...field}
                    {...props}
                />
            </label>
            { meta.touched && meta.error ? (
                <div className={styles.wrapper_error}>
                    <div className="error">{meta.error}</div>
                </div>
            ) : null }
        </div>
    );
};

export default FormTextArea;
