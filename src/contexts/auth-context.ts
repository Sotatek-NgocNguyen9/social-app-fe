/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';

const AuthContext = React.createContext({
  isAuthenticated: false,
  setAuthenticatedState: (state: boolean) => {},
  generateNewAccessToken: () => {},
  logOut: () => {}
});

export default AuthContext;
