import React from "react";

const UserContext = React.createContext({
  userId: null,
  username: "",
  name: "",
  email: "",
  profileImage: "",
  bio: "",
  location: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  isActivate: false,
  setUser: () => {},
  clearUser: () => {},
});

export default UserContext;
