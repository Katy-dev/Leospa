import React from "react";
import styled from "./formInputError.module.scss";

const FormInputError = (props) => {
    const { errorMessage } = props;
  return (
          <div className={styled.error_wrapper}>
              <p className={styled.error_message}>
                  {errorMessage}
              </p>
          </div>
  )
}

export default FormInputError;