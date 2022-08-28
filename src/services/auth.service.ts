import http from "../common/http-common";
import IAuth from "../common/interfaces/auth.interface";

const signIn = async (payload: IAuth) => {
  return await http.post("/auth/login", payload);
};

const AuthService = {signIn};

export default AuthService;