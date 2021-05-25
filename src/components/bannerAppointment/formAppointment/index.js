import { Formik, Form, Field } from "formik";
import React from "react";
import { validationField } from "../../../validate/validatorForm";
import Button from "../../common/buttonComponent";
import FormInput from "../../common/formComponent/formInput";
import styles from "./formAppointment.module.scss";
import FormSelect from "../../common/formComponent/formSelect";
import FormTextArea from "../../common/formComponent/formTextArea";

const initialValues = {
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: ""
};

const serviceList = [
    "service",
    "usual service",
    "vip service",
];

const FormAppointment = () => {
    return (
     <div className={styles.form_wrapper}>
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 400);                actions.resetForm({
                    values: {
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        date: "",
                        time: "",
                        notes: ""
                    },
                });
            }}
            validationSchema={validationField}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                  handleSubmit,
              }) => (
                <Form
                    onSubmit={handleSubmit}
                    className={styles.form_content}
                >
                    <div className={styles.input_group_wrapper}>
                    <Field
                        type="text"
                        name="name"
                        formname="appointment"
                        component={FormInput}
                        placeholder="NAME"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                        <Field
                        type="email"
                        name="email"
                        formname="appointment"
                        placeholder="EMAIL ADDRESS"
                        component={FormInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    </div>
                    <div className={styles.input_group_wrapper}>
                    <FormSelect
                        name="service"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.service}
                    >
                        <option value="">select service</option>
                        {serviceList.map((option, index) => {
                            return (
                                <option
                                    key={index}
                                    value={option}
                                >
                                    {option}
                                </option>
                            );
                        })}
                    </FormSelect>
                    <Field
                        type="tel"
                        name="phone"
                        formname="appointment"
                        placeholder="PHONE NUMBER"
                        component={FormInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    </div>
                    <div className={styles.input_group_wrapper}>
                    <Field
                        type="date"
                        name="date"
                        formname="appointment"
                        component={FormInput}
                        placeholder="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date}
                    />
                    <Field
                        type="time"
                        name="time"
                        formname="appointment"
                        component={FormInput}
                        placeholder="time"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.time}
                    />
                    </div>
                    <div>
                    <FormTextArea
                        placeholder={"YOUR NOTES"}
                        name ="notes"
                        formname="appointment"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.notes}
                    />
                    </div>
                    <div className={styles.button}>
                    <Button
                        title={"Make an appointment"}
                        type="submit"
                        button={"blockButton"}
                        disabled={isSubmitting}
                        >
                    </Button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
)
}

export default FormAppointment;
