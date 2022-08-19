import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const useLogin = () => {
  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Enter your valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [showPassword, setShowPassword] = useState(true);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return {
    loginFormik,
    showPassword,
    handleShowPasswordChange,
  };
};

export default useLogin;
