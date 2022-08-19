import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const useRegister = () => {
  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Enter your valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    agree: Yup.boolean().oneOf([true], 'Please accept Terms of Services!')
  });

  const registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
      agree: false,
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmChange = () => {
    setShowConfirm(!showConfirm);
  };

  return {
    registerFormik,
    showPassword,
    showConfirm,
    handleShowPasswordChange,
    handleShowConfirmChange,
  };
};

export default useRegister;
