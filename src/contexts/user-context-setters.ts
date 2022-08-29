import React from "react";

const UserContextSetters = React.createContext({
  setUser: () => {},
  clearUser: () => {},
  updateProfilePic: (file: any) => {},
});

export default UserContextSetters;
