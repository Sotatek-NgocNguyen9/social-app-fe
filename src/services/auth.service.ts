import http from "../common/http-common";
import IAuth from "../common/interfaces/auth.interface";

const signIn = async (payload: IAuth) => {
  return await http.post("/auth/login", payload);
};

const generateNewAccessToken = async () => {
  return await http.post("/auth/generate-access-token");
}

const logOut = async () => {
  return await http.post("/auth/logout");
}

const forgotPassword = async (username: String) => {
  return await http.post("/auth/forgot-password", { username });
}

const AuthService = {signIn, generateNewAccessToken, logOut, forgotPassword};

export default AuthService;