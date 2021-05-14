import { useField } from "formik";
import React from "react";
import styles from "./formSelect.module.scss";

const FormSelect = ({...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={styles.container}>
        <div className={styles.wrapper_select}>
            <select {...field} {...props} />
        </div>
            { meta.touched && meta.error ? (
                <div className={styles.wrapper_error}>
                    <div className="error">{meta.error}</div>
                </div>
            ) : null }
        </div>
    );
};
export default FormSelect;