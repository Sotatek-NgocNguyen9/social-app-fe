import styles from './ResetPassword.module.css';
import { Typography, IconButton, TextField, Button, Paper, Box, Modal } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import useResetPassword from '../../hooks/use-reset-password';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const {
    resetPasswordFormik,
    showPassword,
    showConfirm,
    showSuccessModal,
    handleShowPasswordChange,
    handleShowConfirmChange
  } = useResetPassword();

  const handleCloseSuccessModal = () => {
    navigate('/sign-in');
  };

  return (
    <Box className={styles.main}>
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
            You have signed up to Social App. Please check your email for confirmation email.
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
            <Typography variant="h1">Reset Password</Typography>
          </Box>
          <form onSubmit={resetPasswordFormik.handleSubmit}>
            <Box mb={1}>
              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type={showPassword ? 'password' : 'text'}
                value={resetPasswordFormik.values.password}
                onChange={resetPasswordFormik.handleChange}
                error={
                  resetPasswordFormik.touched.password &&
                  Boolean(resetPasswordFormik.errors.password)
                }
                helperText={
                  resetPasswordFormik.touched.password && resetPasswordFormik.errors.password
                }
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPasswordChange}>
                      <VisibilityOutlinedIcon />
                    </IconButton>
                  )
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
                type={showConfirm ? 'password' : 'text'}
                value={resetPasswordFormik.values.confirm}
                onChange={resetPasswordFormik.handleChange}
                error={
                  resetPasswordFormik.touched.confirm && Boolean(resetPasswordFormik.errors.confirm)
                }
                helperText={
                  resetPasswordFormik.touched.confirm && resetPasswordFormik.errors.confirm
                }
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowConfirmChange}>
                      <VisibilityOutlinedIcon />
                    </IconButton>
                  )
                }}
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
                Reset Password
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default ResetPassword;
