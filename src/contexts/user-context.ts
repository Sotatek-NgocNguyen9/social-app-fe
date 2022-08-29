import React from "react";

const UserContext = React.createContext({
  userId: 0,
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
});

export default UserContext;
