import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Stack,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { useContext, useRef } from 'react';
import UserContext from '../../contexts/user-context';
import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/svg/linkedin.svg';
import { ReactComponent as CameraIcon } from '../../assets/svg/camera.svg';
import { API_URL } from '../../common/common.constants';
import UserContextSetters from '../../contexts/user-context-setters';
import useBioModal from '../../hooks/use-bio-modal';

const BioModal = (props: any) => {
  const userContext = useContext(UserContext);
  const userContextSetters = useContext(UserContextSetters);

  const inputProfilePictureRef = useRef<HTMLInputElement>(null);
  const handleShowProfilePicture = () => {
    inputProfilePictureRef?.current?.click();
  };
  const handleUpdateProfilePicture = (e: any) => {
    const file = e.target.files[0];
    userContextSetters.updateProfilePic(file);
  };

  const {
    nameFormik,
    locationFormik,
    bioFormik,
    facebookFormik,
    instagramFormik,
    linkedinFormik,
    editName,
    editLocation,
    editBio,
    editFacebook,
    editInstagram,
    editLinkedin,
    setEditName,
    setEditLocation,
    setEditBio,
    setEditFacebook,
    setEditInstagram,
    setEditLinkedin
  } = useBioModal();

  return (
    <Modal open={props.showBioModal} onClose={props.handleCloseBioModal}>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          bgcolor: 'background.paper',
          borderRadius: 5,
          p: 4
        }}>
        <Typography variant="h3" align="center">
          Edit Profile
        </Typography>

        <Grid container alignItems="center" mt={3}>
          <Grid item>
            <Stack direction="row" alignItems="center">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <SvgIcon
                    sx={{
                      width: 56,
                      align: 'left',
                      transform: 'translate(-15px, -5px)'
                    }}
                    onClick={handleShowProfilePicture}>
                    <CameraIcon />
                  </SvgIcon>
                }>
                <form>
                  <input
                    type="file"
                    id="file"
                    ref={inputProfilePictureRef}
                    style={{ display: 'none' }}
                    onChange={handleUpdateProfilePicture}
                  />
                </form>
                <Avatar
                  key={`${API_URL}/photo/profile-image/400x${userContext.profileImage}`}
                  src={`${API_URL}/photo/profile-image/400x${userContext.profileImage}`}
                  sx={{
                    width: 72,
                    height: 72,
                    marginBottom: 0.5,
                    marginRight: 2
                  }}
                  alt={userContext.name}
                />
              </Badge>
              {editName ? (
                <form onSubmit={nameFormik.handleSubmit}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="name"
                      name="name"
                      label="Name"
                      variant="outlined"
                      value={nameFormik.values.name}
                      onChange={nameFormik.handleChange}
                      error={nameFormik.touched.name && Boolean(nameFormik.errors.name)}
                      helperText={nameFormik.touched.name && nameFormik.errors.name}
                    />
                    <Button
                      style={{
                        borderRadius: '20px',
                        backgroundColor: '#C18FF5',
                        padding: '9px 18px 9px 18px',
                        fontSize: '18px',
                        marginTop: '5px'
                      }}
                      variant="contained"
                      color="primary"
                      type="submit">
                      Update
                    </Button>
                  </Stack>
                </form>
              ) : (
                <Typography align="right" variant="h4">
                  {userContext.name}
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon onClick={() => setEditName(!editName)}>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h4" align="left" mt={3}>
              Location
            </Typography>
            {editLocation ? (
              <form onSubmit={locationFormik.handleSubmit}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <TextField
                    fullWidth
                    margin="normal"
                    id="location"
                    name="location"
                    label="Location"
                    variant="outlined"
                    value={locationFormik.values.location}
                    onChange={locationFormik.handleChange}
                    error={
                      locationFormik.touched.location && Boolean(locationFormik.errors.location)
                    }
                    helperText={locationFormik.touched.location && locationFormik.errors.location}
                  />
                  <Button
                    style={{
                      borderRadius: '20px',
                      backgroundColor: '#C18FF5',
                      padding: '9px 18px 9px 18px',
                      fontSize: '18px',
                      marginTop: '5px'
                    }}
                    variant="contained"
                    color="primary"
                    type="submit">
                    Update
                  </Button>
                </Stack>
              </form>
            ) : (
              <Typography variant="body1" align="left" mt={1}>
                {userContext.location ? userContext.location : 'Not Available'}
              </Typography>
            )}
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon onClick={() => setEditLocation(!editLocation)}>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box my={4}>
          <Divider variant="inset" component="li" sx={{ listStyleType: 'none', margin: '0%' }} />
        </Box>

        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h4" align="left">
              Bio
            </Typography>
            {editBio ? (
              <form onSubmit={bioFormik.handleSubmit}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    multiline
                    margin="normal"
                    id="bio"
                    name="bio"
                    label="Bio"
                    variant="outlined"
                    value={bioFormik.values.bio}
                    onChange={bioFormik.handleChange}
                    error={bioFormik.touched.bio && Boolean(bioFormik.errors.bio)}
                    helperText={bioFormik.touched.bio && bioFormik.errors.bio}
                  />
                  <Button
                    style={{
                      borderRadius: '20px',
                      backgroundColor: '#C18FF5',
                      padding: '9px 18px 9px 18px',
                      fontSize: '18px',
                      marginTop: '5px'
                    }}
                    variant="contained"
                    color="primary"
                    type="submit">
                    Update
                  </Button>
                </Stack>
              </form>
            ) : (
              <Typography variant="body1" align="left" mt={1}>
                {userContext.bio ? userContext.bio : 'Not Available'}
              </Typography>
            )}
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon
                    onClick={() => {
                      setEditBio(!editBio);
                    }}>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box my={4}>
          <Divider variant="inset" component="li" sx={{ listStyleType: 'none', margin: '0%' }} />
        </Box>

        <Typography variant="h4" align="left" mb={2}>
          My pages
        </Typography>
        <Grid container alignItems="center">
          <Grid item>
            <Box my={1} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Stack
                sx={{ textDecoration: 'none', margin: 0 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={1}
                ml={8}>
                <SvgIcon>
                  <FacebookIcon />
                </SvgIcon>
                {editFacebook ? (
                  <form onSubmit={facebookFormik.handleSubmit}>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="facebook"
                        name="facebook"
                        label="Facebook"
                        variant="outlined"
                        value={facebookFormik.values.facebook}
                        onChange={facebookFormik.handleChange}
                        error={
                          facebookFormik.touched.facebook && Boolean(facebookFormik.errors.facebook)
                        }
                        helperText={
                          facebookFormik.touched.facebook && facebookFormik.errors.facebook
                        }
                      />
                      <Button
                        style={{
                          borderRadius: '20px',
                          backgroundColor: '#C18FF5',
                          padding: '9px 18px 9px 18px',
                          fontSize: '18px',
                          marginTop: '5px'
                        }}
                        variant="contained"
                        color="primary"
                        type="submit">
                        Update
                      </Button>
                    </Stack>
                  </form>
                ) : (
                  <Typography align="left" color="#000" variant="body2">
                    {userContext.facebook ? userContext.facebook : 'Not Available'}
                  </Typography>
                )}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon
                    onClick={() => {
                      setEditFacebook(!editFacebook);
                    }}>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <Box my={1} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Stack
                sx={{ textDecoration: 'none', margin: 0 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={1}
                ml={8}>
                <SvgIcon>
                  <InstagramIcon />
                </SvgIcon>
                {editInstagram ? (
                  <form onSubmit={instagramFormik.handleSubmit}>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="instagram"
                        name="instagram"
                        label="Instagram"
                        variant="outlined"
                        value={instagramFormik.values.instagram}
                        onChange={instagramFormik.handleChange}
                        error={
                          instagramFormik.touched.instagram &&
                          Boolean(instagramFormik.errors.instagram)
                        }
                        helperText={
                          instagramFormik.touched.instagram && instagramFormik.errors.instagram
                        }
                      />
                      <Button
                        style={{
                          borderRadius: '20px',
                          backgroundColor: '#C18FF5',
                          padding: '9px 18px 9px 18px',
                          fontSize: '18px',
                          marginTop: '5px'
                        }}
                        variant="contained"
                        color="primary"
                        type="submit">
                        Update
                      </Button>
                    </Stack>
                  </form>
                ) : (
                  <Typography align="left" color="#000" variant="body2">
                    {userContext.instagram ? userContext.instagram : 'Not Available'}
                  </Typography>
                )}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon
                    onClick={() => {
                      setEditInstagram(!editInstagram);
                    }}>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <Box my={1} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Stack
                sx={{ textDecoration: 'none', margin: 0 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={1}
                ml={8}>
                <SvgIcon>
                  <LinkedInIcon />
                </SvgIcon>
                {editLinkedin ? (
                  <form onSubmit={linkedinFormik.handleSubmit}>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="linkedin"
                        name="linkedin"
                        label="Linkedin"
                        variant="outlined"
                        value={linkedinFormik.values.linkedin}
                        onChange={linkedinFormik.handleChange}
                        error={
                          linkedinFormik.touched.linkedin && Boolean(linkedinFormik.errors.linkedin)
                        }
                        helperText={
                          linkedinFormik.touched.linkedin && linkedinFormik.errors.linkedin
                        }
                      />
                      <Button
                        style={{
                          borderRadius: '20px',
                          backgroundColor: '#C18FF5',
                          padding: '9px 18px 9px 18px',
                          fontSize: '18px',
                          marginTop: '5px'
                        }}
                        variant="contained"
                        color="primary"
                        type="submit">
                        Update
                      </Button>
                    </Stack>
                  </form>
                ) : (
                  <Typography align="left" color="#000" variant="body2">
                    {userContext.linkedin ? userContext.linkedin : 'Not Available'}
                  </Typography>
                )}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon
                    onClick={() => {
                      setEditLinkedin(!editLinkedin);
                    }}>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default BioModal;
