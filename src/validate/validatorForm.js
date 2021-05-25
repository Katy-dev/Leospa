import * as Yup from 'yup';
import { date } from "yup";

export const validationField = Yup.object().shape({
    email: Yup.string()
        .email("Please, enter a valid email")
        .required("This field is required"),

    name: Yup.string()
        .min(2, "This field must be min 2 characters")
        .max(20, "The number of characters entered can't  exceed 20 characters")
        .required("This field is required"),

    phone: Yup.string()
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
            , "The phone number must be enter in this format 380670000000")
        .min(12, "The phone number was entered incorrectly")
        .max(12, "The phone number was entered incorrectly")
        .required("This field is required"),

    date: date()
    .min(new Date())
    .max(new Date("01-01-2023"))
    .required("This field is required"),

    time:  Yup.string()
        .required("This field is required"),

    service: Yup.string()
        .required("This field is required"),

    notes: Yup.string()
        .min(10, "This field must be min 10 characters")
        .max(180, "The number of characters entered can't  exceed 20 characters")
    .required("This field is required"),

});
