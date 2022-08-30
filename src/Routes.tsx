import { Navigate, Route, Routes as RRoutes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/Home/Home';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import UserProfile from './pages/UserProfile/UserProfile';
import VerifyResetPassword from './pages/VerifyResetPassword/VerifyResetPassword';
import VerifySignUp from './pages/VerifySignUp/VerifySignUp';

const Routes = () => {
  return (
    <RRoutes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/auth/reset-password" element={<VerifyResetPassword />} />
      <Route path="/auth/sign-up" element={<VerifySignUp />} />
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </RRoutes>
  );
};

export default Routes;
