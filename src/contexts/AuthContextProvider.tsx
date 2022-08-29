import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/use-local-storage";
import AuthService from "../services/auth.service";
import AuthContext from "./auth-context";

const AuthContextProvider = (props: any) => {
  const navigate = useNavigate();

  const [isAuthenticated, setAuthenticated] = useLocalStorage(
    "isAuthenticated",
    false
  );

  const setAuthenticatedState = useCallback((state: boolean) => {
    setAuthenticated(state);
  }, []);

  const generateNewAccessToken = useCallback(async () => {
    AuthService.generateNewAccessToken().catch((error) => {
      console.log(error);
      if (error.request.status === 401) {
        AuthService.logOut().then(() => {
          setAuthenticatedState(false);
          navigate("/login");
        });
      }
    });
  }, []);

  const logOut = useCallback(async () => {
    await setAuthenticatedState(false);
    await AuthService.logOut();
    await navigate("/sign-in");
  }, []);

  const authContext = useMemo(() => {
    return {
      isAuthenticated,
      setAuthenticatedState,
      generateNewAccessToken,
      logOut,
    };
  }, [isAuthenticated, setAuthenticatedState, generateNewAccessToken, logOut]);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
