import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const ProtectedRoute = (props: any) => {
  const {token} = useAuth();

  console.log(token);

  if (!token) {
    //or token not valid
    return <Navigate to="/sign-in" />;
  }

  // check token validity

  return props.children;
};

export default ProtectedRoute;
