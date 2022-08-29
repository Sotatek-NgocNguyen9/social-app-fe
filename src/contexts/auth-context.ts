import React from 'react';

const AuthContext = React.createContext({
  isAuthenticated: false,
  setAuthenticatedState: (state: boolean) => {},
  generateNewAccessToken: () => {},
  logOut: () => {}
});

export default AuthContext;
