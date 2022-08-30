import { Paper, Typography, Button, IconButton } from '@mui/material';
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
        pageSize: 5
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

  if (friendRequests.length != 0) {
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
        {friendRequests.map((item: IFriendRequest, index: number) => {
          return (
            <div
              key={index + Math.random()}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{ height: '41px', width: '41px', borderRadius: '50%', overflow: 'hidden' }}>
                <img
                  src={
                    item.profileImage
                      ? `${API_URL}/profile-image/${item.profileImage}`
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
                  <Typography style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>
                    {item.name ? item.name : 'New User'}
                  </Typography>
                </Button>
                <div>
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
                </div>
              </div>
            </div>
          );
        })}
      </Paper>
    );
  } else {
    return null;
  }
};

export default FriendReq;
