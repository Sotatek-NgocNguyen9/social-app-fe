import http from "../common/http-common";
import IAuth from "../common/interfaces/auth.interface";

const signUp = async (payload: IAuth) => {
  const response = await http.post("/user/sign-up", payload);
  return response.data;
};

const UserService = {
  signUp,
};

export default UserService;
