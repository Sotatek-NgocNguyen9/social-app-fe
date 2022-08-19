import styles from "./SignUp.module.css";
import {
  Typography,
  IconButton,
  TextField,
  Button,
  Paper,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useRegister from "src/hooks/use-register";

const SignUp = () => {
  const {
    registerFormik,
    showPassword,
    showConfirm,
    handleShowPasswordChange,
    handleShowConfirmChange,
  } = useRegister();

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
            <Typography variant="h1">Sign Up</Typography>
          </Box>
          <Box mb={1}>
            <Typography color="#4D4D4D" variant="h6">
              Have an account?{" "}
              <Typography variant="h6" color="secondary" sx={{textDecoration: "none"}} component={Link} to="/sign-in">
                Sign In
              </Typography>
            </Typography>
          </Box>
          <form onSubmit={registerFormik.handleSubmit}>
            <Box mb={1}>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email Address"
                variant="outlined"
                value={registerFormik.values.email}
                onChange={registerFormik.handleChange}
                error={
                  registerFormik.touched.email &&
                  Boolean(registerFormik.errors.email)
                }
                helperText={
                  registerFormik.touched.email && registerFormik.errors.email
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
                value={registerFormik.values.password}
                onChange={registerFormik.handleChange}
                error={
                  registerFormik.touched.password &&
                  Boolean(registerFormik.errors.password)
                }
                helperText={
                  registerFormik.touched.password &&
                  registerFormik.errors.password
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
            <Box mb={1}>
              <TextField
                fullWidth
                margin="normal"
                id="confirm"
                name="confirm"
                label="Confirm Password"
                variant="outlined"
                type={showConfirm ? "password" : "text"}
                value={registerFormik.values.confirm}
                onChange={registerFormik.handleChange}
                error={
                  registerFormik.touched.confirm &&
                  Boolean(registerFormik.errors.confirm)
                }
                helperText={
                  registerFormik.touched.confirm &&
                  registerFormik.errors.confirm
                }
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowConfirmChange}>
                      <VisibilityOutlinedIcon />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <FormControlLabel
              control={<Checkbox color="secondary" />}
              label={
                <Box>
                  <Typography variant="h6" display="inline">I accept the </Typography>
                  <Typography variant="h6" color="secondary" display="inline">Terms & Conditions</Typography>
                </Box>
              }
            ></FormControlLabel>
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
                Create Account
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;
