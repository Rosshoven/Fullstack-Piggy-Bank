import * as yup from "yup";

const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
// "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"

// this yup validation function is exported to - imported by create-account.jsx
export const basicSchema = yup.object().shape({
    userName: yup.string().min(8).max(20).required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, { message: "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Required"),
});