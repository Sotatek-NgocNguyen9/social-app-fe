import React from "react";
import IUser from "src/common/interfaces/user.interface";

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
  setUser: (user: IUser) => {},
  clearUser: () => {},
});

export default UserContext;
