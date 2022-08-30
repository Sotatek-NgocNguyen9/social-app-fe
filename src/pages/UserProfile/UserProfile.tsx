import { Typography, Button, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import * as userService from './../../services/user.service';
import Header from './../../components/Header/Header';
import defaultAvarar from './../../assets/defaultAvatar.png';
import { API_URL } from './../../common/common.constants';

interface IUserProfile {
  userId: number;
  username: string;
  name: string;
  email: string;
  profileImage: string;
  bio: string;
  location: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  isActivate: boolean;
  relation: string;
}

function UserProfile() {
  const location = useLocation();
  const [user, setUser] = React.useState<IUserProfile>({
    userId: 0,
    username: '',
    name: '',
    email: '',
    profileImage: '',
    bio: '',
    location: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    relation: '',
    isActivate: false
  });

  useEffect(() => {
    console.log(location.search);
    userService.default.getUserById(location.search).then((res) => {
      setUser({ ...res.data });
    });
  }, [location]);

  return (
    <Box position="fixed" width="100%">
      <Header />
      <div
        style={{
          backgroundColor: '#F1F1F1',
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
          minHeight: '100vh',
          paddingTop: '64px'
        }}>
        <div style={{ flex: '2' }}></div>
        <div style={{ flex: '3.5' }}>
          <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                padding: '16px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
              <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                  <div
                    style={{
                      height: '44px',
                      width: '44px',
                      borderRadius: '50%',
                      overflow: 'hidden'
                    }}>
                    <img
                      src={
                        user.profileImage
                          ? `${API_URL}/profile-image/${user.profileImage}`
                          : defaultAvarar
                      }
                      alt="profile"
                      style={{ maxHeight: '100%' }}></img>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <Typography style={{ fontSize: '1rem', fontWeight: '600' }}>
                      {user.name ? user.name : 'New User'}
                    </Typography>
                    <Typography style={{ color: '#ACACAC' }}>{user.location}</Typography>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography style={{ fontSize: '.8rem' }}>{user.username}</Typography>
                  <div>
                    {user.relation === 'stranger' ? (
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ textTransform: 'none' }}
                        startIcon={<PersonAddIcon></PersonAddIcon>}>
                        add friend
                      </Button>
                    ) : null}
                    {user.relation === 'friend' ? (
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ textTransform: 'none' }}
                        startIcon={<GroupIcon></GroupIcon>}>
                        Is friend
                      </Button>
                    ) : null}
                    {user.relation === 'requesting' ? (
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ textTransform: 'none' }}
                        startIcon={<GroupIcon></GroupIcon>}>
                        sent request
                      </Button>
                    ) : null}
                    {user.relation === 'requester' ? (
                      <div style={{ display: 'flex', gap: '16px' }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ textTransform: 'none' }}
                          startIcon={<GroupAddIcon></GroupAddIcon>}>
                          Accept friend
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ textTransform: 'none' }}
                          startIcon={<GroupRemoveIcon></GroupRemoveIcon>}>
                          Refuse Friend
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </div>
                {user.relation === 'requester' ? (
                  <Typography style={{ textAlign: 'right', marginTop: '16px' }}>
                    {user.name ? user.name : user.username} send you a friend request!
                  </Typography>
                ) : null}
                <div
                  style={{
                    height: '1px',
                    width: '100%',
                    backgroundColor: '#F1F1F1',
                    margin: '16px 0',
                    color: '#F1F1F1'
                  }}></div>
                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <FavoriteIcon style={{ color: '#FC476E' }}></FavoriteIcon>
                    <Typography style={{ fontWeight: '600' }}>0</Typography>
                    <Typography style={{ fontSize: '.9rem', color: '#ACACAC' }}>follows</Typography>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <VisibilityIcon style={{ color: '#F58E54' }}></VisibilityIcon>
                    <Typography style={{ fontWeight: '600' }}>0</Typography>
                    <Typography style={{ fontSize: '.9rem', color: '#ACACAC' }}>
                      following
                    </Typography>
                  </div>
                  <div>
                    <Typography style={{ color: '#6F6F6F', fontSize: '.9rem', textAlign: 'left' }}>
                      {user.bio}
                    </Typography>
                  </div>
                  <div
                    style={{
                      height: '.5px',
                      width: '100%',
                      backgroundColor: '#F1F1F1',
                      margin: '16px 0'
                    }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Typography style={{ textAlign: 'left', color: '#6F6F6F' }}>PAGES</Typography>
                  {user.instagram ? (
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                      <InstagramIcon fontSize="small"></InstagramIcon>
                      <Typography style={{ fontSize: '.9rem' }}>{user.instagram}</Typography>
                    </div>
                  ) : null}
                  {user.linkedin ? (
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                      <LinkedInIcon fontSize="small"></LinkedInIcon>
                      <Typography style={{ fontSize: '.9rem' }}>{user.instagram}</Typography>
                    </div>
                  ) : null}
                  {user.facebook ? (
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                      <FacebookIcon fontSize="small"></FacebookIcon>
                      <Typography style={{ fontSize: '.9rem' }}>{user.instagram}</Typography>
                    </div>
                  ) : null}
                </div>
              </div>
              {/* posts here */}
            </div>
          </div>
        </div>
        <div style={{ flex: '2' }}></div>
      </div>
    </Box>
  );
}

export default UserProfile;
