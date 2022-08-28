import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const ProtectedRoute = (props: any) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return props.children;
  }

  return <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
