import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthService from "../../services/auth.service";
import styles from "./VerifySignUp.module.css";
import { Typography, Button, Paper, Box } from "@mui/material";

const VerifySignUp = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("secretToken");

  const [isLoading, setIsLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (token) {
      AuthService.confirmEmail(token)
        .then((response) => {
          if (response.status === 201) {
            setVerified(true);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  }, [navigate, token]);

  return (
    <Box className={styles.main}>
      <Box className={styles.flex}></Box>
      <Box className={styles.flex}>
        <Paper
          elevation={1}
          className={styles.login}
          style={{ borderRadius: "30px" }}
        >
          <Box mb={2}>
            <Typography variant="h1">Verify Email</Typography>
            {!isLoading ? verified ? (
              <Box my={2}>
                <Typography>
                  Your account has been verified! Let's sign in.
                </Typography>
                <Button
                  style={{
                    marginTop: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#C18FF5",
                    padding: "18px 36px",
                    fontSize: "18px",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={() => navigate("/sign-in")}
                >
                  Go to sign in page
                </Button>
              </Box>
            ) : (
              <Box my={2}>
                <Typography>
                  Your account can't be verified. Please login to get a new
                  verification email!
                </Typography>
              </Box>
            ): <></>}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default VerifySignUp;
