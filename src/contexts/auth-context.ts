import React from "react";

const AuthContext = React.createContext({
  token: String,
  login: (payload: String) => {},
  logout: () => {},
});

export default AuthContext;
