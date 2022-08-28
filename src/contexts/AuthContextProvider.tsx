import { useCallback, useMemo, useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props: any) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const setAuthenticatedState = useCallback((state: boolean) => {
    setAuthenticated(state);
  }, []);

  const authContext = useMemo(() => {
    return { isAuthenticated, setAuthenticatedState };
  }, [isAuthenticated, setAuthenticatedState]);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
