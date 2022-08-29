import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import IUser from "src/common/interfaces/user.interface";
import UserService from "../services/user.service";
import UserContext from "./user-context";
import UserContextSetters from "./user-context-setters";

const UserContextProvider = (props: any) => {
  const navigate = useNavigate();

  const defaultUserContextState: IUser = useMemo(() => {
    return {
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
  }, []);

  const [userContextState, setUserContextState] = useState(
    defaultUserContextState
  );

  const setUserContextHandler = useCallback(() => {
    UserService.getMe().then((response) => {
      setUserContextState(response.data);
    });
  }, []);

  const clearUserContextHandler = useCallback(() => {
    setUserContextState(defaultUserContextState);
  }, [defaultUserContextState]);

  const updateProfilePic = useCallback((file: any) => {
    UserService.updateProfilePic(file).then(() => {
      UserService.getMe().then((response) => {
        setTimeout(() => {setUserContextState(response.data);}, 1500);
      });
    });
  }, []);

  const updateName = useCallback((name: string) => {
    UserService.updateName(name).then(() => {
      UserService.getMe().then((response) => {
        setTimeout(() => {setUserContextState(response.data);}, 500);
      });
    });
  }, [])

  const updateBio = useCallback((bio: string) => {
    UserService.updateBio(bio).then(() => {
      UserService.getMe().then((response) => {
        setTimeout(() => {setUserContextState(response.data);}, 500);
      });
    });
  }, [])

  const updateLocation = useCallback((location: string) => {
    UserService.updateLocation(location).then(() => {
      UserService.getMe().then((response) => {
        setTimeout(() => {setUserContextState(response.data);}, 500);
      });
    });
  },[])

  const updateFacebook = useCallback((facebook: string) => {
    UserService.updateFacebook(facebook).then(() => {
      UserService.getMe().then((response) => {
        setTimeout(() => {setUserContextState(response.data);}, 500);
      });
    });
  }, [])

  const updateInstagram = useCallback((instagram: string) => {
    UserService.updateInstagram(instagram).then(() => {
      UserService.getMe().then((response) => {
        setTimeout(() => {setUserContextState(response.data);}, 500);
      });
    });
  }, [])

  const updateLinkedin = useCallback((linkedin: string) => {
    UserService.updateLinkedin(linkedin).then(() => {
      UserService.getMe().then((response) => {
        setTimeout(() => {setUserContextState(response.data);}, 500);
      });
    });
  },[])

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

  const userContextSetters = useMemo(() => {
    return {
      setUser: setUserContextHandler,
      clearUser: clearUserContextHandler,
      updateProfilePic: updateProfilePic,
      updateName: updateName,
      updateBio: updateBio,
      updateLocation: updateLocation,
      updateFacebook: updateFacebook,
      updateInstagram: updateInstagram,
      updateLinkedin: updateLinkedin,
    };
  }, [setUserContextHandler, clearUserContextHandler, updateProfilePic]);

  return (
    <UserContext.Provider value={userContext}>
      <UserContextSetters.Provider value={userContextSetters}>
        {props.children}
      </UserContextSetters.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
