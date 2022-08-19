import styles from "./SignIn.module.css";
import Background from "../../assets/authBackground.png";
import {
  Link,
  Typography,
  IconButton,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useLogin from "src/hooks/use-login";

const Login = () => {
  const {
    email,
    password,
    showPassword,
    handleEmailChange,
    handlePasswordChange,
    handleShowPasswordChange,
  } = useLogin();

  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className={styles.flex}></div>
      <div className={styles.flex}>
        <Paper
          elevation={1}
          className={styles.login}
          style={{ borderRadius: "30px" }}
        >
          <Typography variant="h3">Sign In</Typography>
          <Typography color="#4D4D4D">
            Don't have an account?{" "}
            <Link underline="none" href="/sign-up">
              Sign Up
            </Link>
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            variant="outlined"
            value={password}
            type={showPassword ? "password" : "text"}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleShowPasswordChange}>
                  <VisibilityOutlinedIcon />
                </IconButton>
              ),
            }}
          />
          <Button
            style={{
              marginTop: "20px",
              borderRadius: "20px",
              backgroundColor: "#C18FF5",
              padding: "18px 36px",
              fontSize: "18px",
              width: "100%",
            }}
            variant="contained"
            color="secondary"
          >
            Sign In
          </Button>
          <Typography>
            <Link underline="none" href="/forgot-password">
              Forgot Your Password?
            </Link>
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
