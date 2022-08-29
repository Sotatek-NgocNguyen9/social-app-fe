import http from '../common/http-common';
import IAuth from '../common/interfaces/auth.interface';

const signUp = async (payload: IAuth) => {
  return await http.post('/user/sign-up', payload);
};

const resetPassword = async (password: string) => {
  return await http.post('/user/reset-password', { password });
};

const resendConfirmEmail = async (username: string) => {
  return await http.post('/user/resend-confirm-email', { username });
};

const getMe = async () => {
  return await http.get('/user/me');
};

const updateProfilePic = async (file: any) => {
  const formData = new FormData();
  formData.append('profileImage', file);
  return await http.put('/user/update-profile', formData);
};

const updateName = async (name: string) => {
  const formData = new FormData();
  formData.append('name', name);
  return await http.put('/user/update-profile', formData);
};

const updateLocation = async (location: string) => {
  const formData = new FormData();
  formData.append('location', location);
  return await http.put('/user/update-profile', formData);
};

const updateBio = async (bio: string) => {
  const formData = new FormData();
  formData.append('bio', bio);
  return await http.put('/user/update-profile', formData);
};

const updateFacebook = async (facebook: string) => {
  const formData = new FormData();
  formData.append('facebook', facebook);
  return await http.put('/user/update-profile', formData);
};

const updateInstagram = async (instagram: string) => {
  const formData = new FormData();
  formData.append('instagram', instagram);
  return await http.put('/user/update-profile', formData);
};

const updateLinkedin = async (linkedin: string) => {
  const formData = new FormData();
  formData.append('linkedin', linkedin);
  return await http.put('/user/update-profile', formData);
};

const UserService = {
  signUp,
  resetPassword,
  resendConfirmEmail,
  getMe,
  updateProfilePic,
  updateName,
  updateLocation,
  updateBio,
  updateFacebook,
  updateInstagram,
  updateLinkedin
};

export default UserService;
