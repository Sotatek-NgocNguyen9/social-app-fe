import { useCallback, useMemo, useReducer } from "react";
import IUser from "src/common/interfaces/user.interface";
import UserService from "../services/user.service";
import UserContext from "./user-context";
import UserContextSetters from "./user-context-setters";

const UserContextProvider = (props: any) => {
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

  const userContextReducer = useCallback((state: any, action: any) => {
    if (action.type === "SET") {
      return action.user;
    }
    if (action.type === "CLEAR") {
      return defaultUserContextState;
    }
    return defaultUserContextState;
  }, []);

  const [userContextState, dispatchUserContextAction] = useReducer(
    userContextReducer,
    defaultUserContextState
  );

  const setUserContextHandler = useCallback(() => {
    UserService.getMe().then((response) => {
      dispatchUserContextAction({ type: "SET", user: response.data });
    });    
  }, []);

  const clearUserContextHandler = useCallback(() => {
    dispatchUserContextAction({ type: "CLEAR" });
  }, []);

  const updateProfilePic = useCallback((file: any) => {
    UserService.updateProfilePic(file).then(() => {
      UserService.getMe().then((response) => {
      dispatchUserContextAction({ type: "SET", user: response.data });
    }); });
  }, []);

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
      
    };
  }, [userContextState]);

  const userContextSetters = useMemo(() => {return{
      setUser: setUserContextHandler,
      clearUser: clearUserContextHandler,
      updateProfilePic: updateProfilePic,}
  }, [setUserContextHandler, clearUserContextHandler, updateProfilePic])

  return (
    <UserContext.Provider value={userContext}>
      <UserContextSetters.Provider value={userContextSetters}>
        {props.children}
      </UserContextSetters.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
