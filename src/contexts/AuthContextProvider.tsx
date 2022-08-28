import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/use-local-storage";
import AuthContext from "./auth-context";

const AuthContextProvider = (props: any) => {
  const navigate = useNavigate();

  const [token, setToken] = useLocalStorage("token", null);

  const login = useCallback(async (payload: String) => {
    setToken(payload);
    navigate("/");
  }, [navigate, setToken]);

  const logout = useCallback(() => {
    setToken(null);
    navigate("/sign-in", { replace: true });
  }, [navigate, setToken]);

  const authContext = useMemo(() => {
    return { token, login, logout };
  }, [token, login, logout]);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
