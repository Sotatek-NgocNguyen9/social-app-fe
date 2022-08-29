import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import useAuth from './use-auth';

const useLogin = () => {
  const setAuthenticatedState = useAuth().setAuthenticatedState;

  const navigate = useNavigate();

  const loginValidationSchema = Yup.object({
    email: Yup.string().email('Enter your valid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required')
  });

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      AuthService.signIn({
        username: values.email,
        password: values.password
      })
        .then((response) => {
          if (response.status === 201) {
            setAuthenticatedState(true);
            navigate('/');
          }
        })
        .catch((error) => {
          if (error.response.status === 400 || error.response.status === 403) {
            setShowErrorModal(true);
          }
          if (error.response.status === 401) {
            UserService.resendConfirmEmail(values.email).then((response) => {
              if (response.status === 201) {
                setShowConfirmModal(true);
              }
            });
          }
        });
    }
  });

  const [showPassword, setShowPassword] = useState(true);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return {
    loginFormik,
    showPassword,
    showErrorModal,
    showConfirmModal,
    handleShowPasswordChange
  };
};

export default useLogin;
