import http from "../common/http-common";
import IAuth from "../common/interfaces/auth.interface";

const signUp = async (payload: IAuth) => {
  return await http.post("/user/sign-up", payload);
};

const resetPassword = async (password: String) => {
  return await http.post("/user/reset-password", { password });
}

const UserService = {
  signUp,
  resetPassword
};

export default UserService;
