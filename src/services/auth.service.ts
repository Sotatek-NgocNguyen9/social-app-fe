import http from '../common/http-common';
import IAuth from '../common/interfaces/auth.interface';

const signIn = async (payload: IAuth) => {
  return await http.post('/auth/login', payload);
};

const generateNewAccessToken = async () => {
  return await http.get('/auth/generate-access-token');
};

const logOut = async () => {
  return await http.post('/auth/logout');
};

const forgotPassword = async (username: string) => {
  return await http.post('/auth/forgot-password', { username });
};

const confirmResetPassword = async (secretToken: string) => {
  return await http.post('/auth/confirm-reset-password', { secretToken });
};

const confirmEmail = async (secretToken: string) => {
  return await http.post('/auth/confirm-email', { secretToken });
};

const AuthService = {
  signIn,
  generateNewAccessToken,
  logOut,
  forgotPassword,
  confirmResetPassword,
  confirmEmail
};

export default AuthService;
