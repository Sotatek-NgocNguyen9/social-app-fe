import http from "../common/http-common";
import IAuth from "../common/interfaces/auth.interface";

const signUp = async (payload: IAuth) => {
  return await http.post("/user/sign-up", payload);
};

const UserService = {
  signUp,
};

export default UserService;
