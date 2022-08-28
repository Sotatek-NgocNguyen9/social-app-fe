import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthService from "../../services/auth.service";

const VerifyResetPassword = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("secretToken");

  useEffect(() => {
    if (token) {
      AuthService.confirmResetPassword(token).then((response) => {
        if (response.status === 201) {
          navigate("/reset-password");
        }
      });
    }
  }, [navigate, token]);

  return <></>;
};

export default VerifyResetPassword;
