import { Paper, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { IFriend } from 'src/common/interfaces/friend.interface';
import { appTheme } from '../../themes/theme';
import * as friendService from './../../services/friend.service';
import { API_URL } from '../../common/common.constants';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../../assets/defaultAvatar.png';

const FriendList = () => {
  const navigate = useNavigate();

  const [friendList, setFriendList] = React.useState<IFriend[]>([]);

  useEffect(() => {
    friendService.default
      .getFriendList({
        page: 1,
        pageSize: 5
      })
      .then((res) => {
        setFriendList([...res.data]);
      });
  }, []);

  console.log(friendList);

  if (friendList.length != 0) {
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
        {friendList.map((item: IFriend, index: number) => {
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
                  <Typography>Ha Noi</Typography>
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

export default FriendList;
