import styles from './ForgotPassword.module.css';
import { Typography, TextField, Button, Paper, Box, Modal } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useForgotPassword from '../../hooks/use-forgot-password';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { forgotPasswordFormik, setShowErrorModal, showErrorModal, showSuccessModal } =
    useForgotPassword();

  const handleCloseSuccessModal = () => {
    navigate('/sign-in');
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <Box className={styles.main}>
      <Modal open={showErrorModal} onClose={handleCloseErrorModal}>
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            bgcolor: 'background.paper',
            borderRadius: 10,
            p: 4
          }}>
          <Typography variant="h3">Oh no...</Typography>
          <Typography sx={{ mt: 2 }}>
            There's no email with that address. Please try again.
          </Typography>
          <Button
            style={{
              marginTop: '20px',
              borderRadius: '20px',
              backgroundColor: '#C18FF5',
              padding: '18px 36px',
              fontSize: '18px',
              float: 'right'
            }}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Box>
      </Modal>
      <Modal open={showSuccessModal} onClose={handleCloseSuccessModal}>
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            bgcolor: 'background.paper',
            borderRadius: 10,
            p: 4
          }}>
          <Typography variant="h3">Success</Typography>
          <Typography sx={{ mt: 2 }}>
            You have got an email to reset your password. Please check your email for confirmation
            email.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Closing this dialog will redirect you to sign in page!
          </Typography>
          <Button
            style={{
              marginTop: '20px',
              borderRadius: '20px',
              backgroundColor: '#C18FF5',
              padding: '18px 36px',
              fontSize: '18px',
              float: 'right'
            }}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Box>
      </Modal>
      <Box className={styles.flex}></Box>
      <Box className={styles.flex}>
        <Paper elevation={1} className={styles.login} style={{ borderRadius: '30px' }}>
          <Box mb={2}>
            <Typography variant="h1">Forgot Password</Typography>
          </Box>
          <Box mb={1}>
            <Typography color="#4D4D4D" variant="h6">
              Have an account?{' '}
              <Typography
                variant="h6"
                color="secondary"
                sx={{ textDecoration: 'none' }}
                component={Link}
                to="/sign-in">
                Sign In
              </Typography>
            </Typography>
          </Box>
          <form onSubmit={forgotPasswordFormik.handleSubmit}>
            <Box mb={1}>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email Address"
                variant="outlined"
                value={forgotPasswordFormik.values.email}
                onChange={forgotPasswordFormik.handleChange}
                error={
                  forgotPasswordFormik.touched.email && Boolean(forgotPasswordFormik.errors.email)
                }
                helperText={forgotPasswordFormik.touched.email && forgotPasswordFormik.errors.email}
              />
            </Box>
            <Box mb={3}>
              <Button
                style={{
                  marginTop: '20px',
                  borderRadius: '20px',
                  backgroundColor: '#C18FF5',
                  padding: '18px 36px',
                  fontSize: '18px',
                  width: '100%'
                }}
                variant="contained"
                color="primary"
                type="submit">
                RESET PASSWORD
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
