import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import UserService from "../services/user.service";

const useResetPassword = () => {
  const resetPasswordValidationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const resetPasswordFormik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values) => {
      UserService.resetPassword(values.password.toString()).then((data) => {
        if (data) {
          setShowSuccessModal(true);
        }
      });
    },
  });

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmChange = () => {
    setShowConfirm(!showConfirm);
  };

  return {
    resetPasswordFormik,
    showPassword,
    showConfirm,
    showSuccessModal,
    handleShowPasswordChange,
    handleShowConfirmChange,
  };
};

export default useResetPassword;
