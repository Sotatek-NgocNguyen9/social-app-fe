import http from "../common/http-common";
import IAuth from "../common/interfaces/auth.interface";

const signUp = async (payload: IAuth) => {
  return await http.post("/user/sign-up", payload);
};

const resetPassword = async (password: String) => {
  return await http.post("/user/reset-password", { password });
};

const resendConfirmEmail = async (username: String) => {
  return await http.post("/user/resend-confirm-email", { username });
};

const getMe = async () => {
  return await http.get("/user/me");
}

const updateProfilePic = async (file: any) => {
  let formData = new FormData();
  formData.append("profileImage", file);
  return await http.put("/user/update-profile", formData);
}

const UserService = {
  signUp,
  resetPassword,
  resendConfirmEmail,
  getMe,
  updateProfilePic
};

export default UserService;
