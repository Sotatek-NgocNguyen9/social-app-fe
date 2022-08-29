import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import UserService from '../services/user.service';

const useRegister = () => {
  const loginValidationSchema = Yup.object({
    email: Yup.string().email('Enter your valid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    agree: Yup.bool().oneOf([true], 'Please accept Terms of Services!')
  });

  const registerFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm: '',
      agree: false
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      if (!registerFormik.values.agree) {
        setShowAgreeError(true);
      } else {
        const response = await UserService.signUp({
          username: values.email.toString(),
          password: values.password.toString()
        });

        console.log(response.status);

        if (response.status === 201) {
          setShowSuccessModal(true);
        }
      }
    }
  });

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [showAgreeError, setShowAgreeError] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
    showAgreeError,
    showSuccessModal,
    handleShowPasswordChange,
    handleShowConfirmChange
  };
};

export default useRegister;
