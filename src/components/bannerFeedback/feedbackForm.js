import { Formik, Form, Field } from "formik";
import React from "react";
import { validationField } from "../../validate/validatorForm";
import Button from "../common/buttonComponent";
import FormInput from "../common/formComponent/formInput";
import styles from "./feedbackForm.module.scss";
import FormTextArea from "../common/formComponent/formTextArea";
import FormSelect from "../common/formComponent/formSelect";

const initialValues = {
    name: "",
    email: "",
    comment: "",
};

const FeedbackForm = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 400);
                    actions.resetForm({
                        values: {
                            name: "",
                            email: "",
                            comment: "",
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
                    <Form onSubmit={handleSubmit}>
                        <Field
                            type="text"
                            name="name"
                            formname="feedback"
                            component={FormInput}
                            placeholder="NAME"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <Field
                            type="email"
                            name="email"
                            formname="feedback"
                            placeholder="EMAIL ADDRESS"
                            component={FormInput}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <FormTextArea
                            placeholder={"WRITE COMMENT"}
                            name ="comment"
                            formname = "feedback"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.comment}
                        />
                        <div className={styles.button}>
                            <Button
                                title={"submit now"}
                                type="submit"
                                button={"blockButton"}
                                disabled={isSubmitting}
                            >
                            </Button>
                        </div>
                    </Form>

                )}
            </Formik>
        </>
    )
}

export default FeedbackForm;
