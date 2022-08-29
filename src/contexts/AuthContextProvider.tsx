import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/use-local-storage';
import AuthService from '../services/auth.service';
import AuthContext from './auth-context';

const AuthContextProvider = (props: any) => {
  const navigate = useNavigate();

  const [isAuthenticated, setAuthenticated] = useLocalStorage('isAuthenticated', false);

  const setAuthenticatedState = useCallback(
    (state: boolean) => {
      setAuthenticated(state);
    },
    [setAuthenticated]
  );

  const generateNewAccessToken = useCallback(async () => {
    AuthService.generateNewAccessToken().catch((error) => {
      console.log(error);
      if (error.request.status === 401) {
        AuthService.logOut().then(() => {
          setAuthenticatedState(false);
          navigate('/login');
        });
      }
    });
  }, [navigate, setAuthenticatedState]);

  const logOut = useCallback(async () => {
    AuthService.logOut()
      .then(() => {
        navigate('/sign-in');
        setAuthenticatedState(false);
      })
      .catch(() => {
        navigate('/sign-in');
        setAuthenticatedState(false);
      });
  }, [navigate, setAuthenticatedState]);

  const authContext = useMemo(() => {
    return {
      isAuthenticated,
      setAuthenticatedState,
      generateNewAccessToken,
      logOut
    };
  }, [isAuthenticated, setAuthenticatedState, generateNewAccessToken, logOut]);

  return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
