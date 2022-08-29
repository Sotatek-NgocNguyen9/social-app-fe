import {
  Avatar,
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { useContext } from 'react';
import { API_URL } from '../../common/common.constants';
import UserContext from '../../contexts/user-context';
import { appTheme } from '../../themes/theme';
import { ReactComponent as ImageIcon } from '../../assets/svg/image.svg';

const NewPostModal = (props: any) => {
  const userContext = useContext(UserContext);

  return (
    <Modal open={props.showNewPostModal} onClose={props.handleCloseNewPostModal}>
      <Box
        sx={{
          outline: 'none',
          position: 'absolute' as const,
          border: '0px solid black',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          bgcolor: 'background.paper',
          borderRadius: 5,
          p: 4
        }}>
        <Typography variant="h4" align="center">
          Create Post
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2} mt={2} mb={1}>
          <Avatar
            key={`${API_URL}/photo/profile-image/200x${userContext.profileImage}`}
            src={`${API_URL}/photo/profile-image/200x${userContext.profileImage}`}
            sx={{ width: 64, height: 64 }}
            alt={userContext.name}
          />
          <Box>
            <Typography align="left" variant="h5" sx={{ marginBottom: 1 }}>
              {userContext.name}
            </Typography>
            <Typography
              align="left"
              variant="body1"
              sx={{
                display: 'inline',
                backgroundColor: appTheme.palette.gray.background,
                padding: '5px',
                borderRadius: 2
              }}>
              Public
            </Typography>
          </Box>
        </Stack>
        <form>
          <TextField
            sx={{
              '& fieldset': { border: 'none' },
              marginLeft: '-10px'
            }}
            fullWidth
            placeholder="What's on your mind?"
            multiline
            required></TextField>
          <Grid
            container
            alignItems="center"
            mt={3}
            px={2}
            sx={{
              marginTop: '100px',
              padding: '15px 20px 15px 20px',
              border: `1px solid ${appTheme.palette.gray.text}`,
              borderRadius: '10px'
            }}>
            <Grid item>
              <Typography>Add to your post</Typography>
            </Grid>
            <Grid item xs>
              <Grid container direction="row-reverse">
                <Grid item>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <SvgIcon>
                      <ImageIcon />
                    </SvgIcon>
                    <Typography variant="h6">Image</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            style={{
              marginTop: '10px',
              borderRadius: '10px',
              backgroundColor: '#C18FF5',
              padding: '9px 18px',
              fontSize: '18px',
              width: '100%'
            }}
            variant="contained"
            color="primary"
            type="submit">
            Post
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default NewPostModal;
