import { useMemo, useReducer } from "react";
import IUser from "src/common/interfaces/user.interface";
import UserService from "../services/user.service";
import UserContext from "./user-context";

const defaultUserContextState: IUser = {
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
};

const userContextReducer = (state: any, action: any) => {
  if (action.type === "SET") {
    return action.user;
  }
  if (action.type === "CLEAR") {
    return defaultUserContextState;
  }
  return defaultUserContextState;
};

const UserContextProvider = (props: any) => {
  const [userContextState, dispatchUserContextAction] = useReducer(
    userContextReducer,
    defaultUserContextState
  );

  const setUserContextHandler = () => {
    const user = UserService.getMe().then((response) => {
      dispatchUserContextAction({ type: "SET", user: response.data });
    });    
  };

  const clearUserContextHandler = () => {
    dispatchUserContextAction({ type: "CLEAR" });
  };

  const userContext = useMemo(() => {
    return {
      userId: userContextState.userId,
      username: userContextState.username,
      name: userContextState.name,
      email: userContextState.email,
      profileImage: userContextState.profileImage,
      bio: userContextState.bio,
      location: userContextState.location,
      facebook: userContextState.facebook,
      instagram: userContextState.instagram,
      linkedin: userContextState.linkedin,
      isActivate: userContextState.isActivate,
      setUser: setUserContextHandler,
      clearUser: clearUserContextHandler,
    };
  }, [userContextState]);

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
