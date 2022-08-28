import React from "react";

const AuthContext = React.createContext({
  isAuthenticated: false,
  setAuthenticatedState: (state: boolean) => {},
});

export default AuthContext;
