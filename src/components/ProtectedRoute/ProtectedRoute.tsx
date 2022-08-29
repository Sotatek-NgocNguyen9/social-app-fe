import { Navigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/use-local-storage';

const ProtectedRoute = (props: any) => {
  const [isAuthenticated] = useLocalStorage('isAuthenticated', false);

  if (isAuthenticated) {
    return props.children;
  }

  return <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
