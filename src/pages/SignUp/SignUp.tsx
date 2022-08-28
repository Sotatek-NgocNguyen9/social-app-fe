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
  Modal,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useRegister from "src/hooks/use-register";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    registerFormik,
    showPassword,
    showConfirm,
    showAgreeError,
    showSuccessModal,
    handleShowPasswordChange,
    handleShowConfirmChange,
  } = useRegister();

  const handleCloseSuccessModal = () => {
    navigate("/sign-in");
  };

  const handleCloseButtonSuccessModal = () => {
    navigate("/sign-in");
  };

  return (
    <Box className={styles.main}>
      <Modal open={showSuccessModal} onClose={handleCloseSuccessModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            borderRadius: 10,
            p: 4,
          }}
        >
          <Typography variant="h3">Success</Typography>
          <Typography sx={{ mt: 2 }}>
            You have signed up to Social App. Please check your email for
            confirmation email.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Closing this dialog will redirect you to sign in page!
          </Typography>
          <Button
            style={{
              marginTop: "20px",
              borderRadius: "20px",
              backgroundColor: "#C18FF5",
              padding: "18px 36px",
              fontSize: "18px",
              float: "right",
            }}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleCloseButtonSuccessModal}
          >
            Close
          </Button>
        </Box>
      </Modal>
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
              <Typography
                variant="h6"
                color="secondary"
                sx={{ textDecoration: "none" }}
                component={Link}
                to="/sign-in"
              >
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
              control={
                <Checkbox
                  id="agree"
                  name="agree"
                  checked={registerFormik.values.agree}
                  onChange={registerFormik.handleChange}
                  color="secondary"
                />
              }
              label={
                <Box>
                  <Typography variant="h6" display="inline">
                    I accept the{" "}
                  </Typography>
                  <Typography variant="h6" color="secondary" display="inline">
                    Terms & Conditions
                  </Typography>
                </Box>
              }
            ></FormControlLabel>
            {showAgreeError && (
              <Typography color="error" variant="body2">
                {registerFormik.errors.agree}
              </Typography>
            )}
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
