import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import AuthService from '../services/auth.service';

const useForgotPassword = () => {
  const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string().email('Enter your valid email').required('Email is required')
  });

  const forgotPasswordFormik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values) => {
      AuthService.forgotPassword(values.email.toString())
        .catch((error) => {
          if (error.response.status === 400) {
            setShowErrorModal(true);
          }
        })
        .then((data) => {
          if (data) {
            setShowSuccessModal(true);
          }
        });
    }
  });

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return {
    forgotPasswordFormik,
    setShowErrorModal,
    showErrorModal,
    showSuccessModal
  };
};

export default useForgotPassword;
