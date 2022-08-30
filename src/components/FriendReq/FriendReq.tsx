import { Paper, Typography, Button, IconButton, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { IFriendRequest } from 'src/common/interfaces/friend.interface';
import { appTheme } from '../../themes/theme';
import * as friendService from './../../services/friend.service';
import { API_URL } from '../../common/common.constants';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/HighlightOff';
import defaultAvatar from '../../assets/defaultAvatar.png';

const FriendReq = (props: any) => {
  const navigate = useNavigate();

  const [friendRequests, setFriendRequests] = React.useState<IFriendRequest[]>([]);

  useEffect(() => {
    friendService.default
      .getRequestList({
        page: 1,
        pageSize: 3
      })
      .then((res) => {
        setFriendRequests([...res.data]);
      });
  }, []);

  function handleAcceptFriend(requesterId: number) {
    friendService.default
      .acceptFriend({
        requesterId: requesterId
      })
      .then(() => {
        setFriendRequests((state: IFriendRequest[]) =>
          state.filter((item: IFriendRequest) => {
            return item.userId != requesterId;
          })
        );
        props.setShowMessageModal({ message: 'Accept friend request success!', error: '' });
      })
      .catch(() => {
        props.setShowMessageModal({ message: '', error: 'Something wrong happen' });
      });
  }

  function handleRefuseFriend(requesterId: number) {
    friendService.default
      .refuseFriend({
        requesterId: requesterId
      })
      .then(() => {
        setFriendRequests((state: IFriendRequest[]) =>
          state.filter((item: IFriendRequest) => {
            return item.userId != requesterId;
          })
        );
        props.setShowMessageModal({ message: 'Remove friend request success!', error: '' });
      })
      .catch(() => {
        props.setShowMessageModal({ message: '', error: 'Something wrong happen' });
      });
  }

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: appTheme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: appTheme.spacing(1),
        textAlign: 'center',
        borderRadius: 8,
        height: '40vh',
        marginBottom: 2
      }}>
      <div style={{ padding: '16px' }}>
        <Typography>Friend Request</Typography>
        <div
          style={{
            height: '1px',
            width: '100%',
            backgroundColor: '#F1F1F1',
            margin: '4px 0',
            color: '#F1F1F1'
          }}></div>
        {!friendRequests.length ? (
          <Typography style={{ fontSize: '.9rem' }}>none</Typography>
        ) : null}
        {friendRequests.map((item: IFriendRequest, index: number) => {
          return (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{ height: '42px', width: '42px', borderRadius: '50%', overflow: 'hidden' }}>
                <img
                  src={
                    item.profileImage
                      ? `${API_URL}/photo/profile-image/${item.profileImage}`
                      : defaultAvatar
                  }
                  alt="profile"
                  style={{ maxHeight: '100%' }}></img>
              </div>
              <div>
                {/* hehree */}
                <Button
                  disableRipple
                  style={{ backgroundColor: 'transparent', textTransform: 'none', padding: '0' }}
                  onClick={() => {
                    navigate('/user-profile?userId=' + item.userId);
                  }}>
                  <Typography
                    style={{
                      marginLeft: '6px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'black'
                    }}>
                    {item.name ? item.name : 'New User'}
                  </Typography>
                </Button>
                <Stack direction="row" alignItems="center">
                  <IconButton
                    onClick={() => handleAcceptFriend(item.userId)}
                    color="secondary"
                    size="small"
                    aria-label="add an alarm">
                    <CheckCircleIcon
                      fontSize="inherit"
                      style={{ color: '#4EDF9A' }}></CheckCircleIcon>
                  </IconButton>
                  <IconButton
                    onClick={() => handleRefuseFriend(item.userId)}
                    color="secondary"
                    size="small"
                    aria-label="add an alarm">
                    <CancelIcon fontSize="inherit" style={{ color: '#FE6F82' }}></CancelIcon>
                  </IconButton>
                </Stack>
              </div>
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

export default FriendReq;
