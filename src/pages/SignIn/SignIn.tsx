import styles from "./SignIn.module.css";
import {
  Typography,
  IconButton,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useLogin from "src/hooks/use-login";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    loginFormik,
    showPassword,
    handleShowPasswordChange,
  } = useLogin();

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
            <Typography variant="h1">Sign In</Typography>
          </Box>
          <Box mb={1}>
            <Typography color="#4D4D4D" variant="h6">
              Don't have an account?{" "}
              <Typography
                variant="h6"
                color="secondary"
                sx={{ textDecoration: "none" }}
                component={Link}
                to="/sign-up"
              >
                Sign Up
              </Typography>
            </Typography>
          </Box>
          <form onSubmit={loginFormik.handleSubmit}>
            <Box mb={1}>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email Address"
                variant="outlined"
                value={loginFormik.values.email}
                onChange={loginFormik.handleChange}
                error={
                  loginFormik.touched.email && Boolean(loginFormik.errors.email)
                }
                helperText={
                  loginFormik.touched.email && loginFormik.errors.email
                }
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type={showPassword ? "password" : "text"}
                value={loginFormik.values.password}
                onChange={loginFormik.handleChange}
                error={
                  loginFormik.touched.password &&
                  Boolean(loginFormik.errors.password)
                }
                helperText={
                  loginFormik.touched.password && loginFormik.errors.password
                }
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPasswordChange}>
                      <VisibilityOutlinedIcon />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
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
                color="primary"
                type="submit"
              >
                Sign In
              </Button>
            </Box>
          </form>
          <Typography variant="h6">
            <Typography variant="h6" color="secondary" sx={{ textDecoration: "none" }} component={Link} to="/forget-password">
              Forgot Your Password?
            </Typography>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignIn;
