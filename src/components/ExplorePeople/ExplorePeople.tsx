import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import { IPeople } from 'src/common/interfaces/friend.interface';
import * as friendService from './../../services/friend.service';
import { API_URL } from './../../common/common.constants';
import defaultAvatar from './../../assets/defaultAvatar.png';

function PeopleItem({ peopleItem }: { peopleItem: IPeople }) {
  const navigate = useNavigate();
  const [isSentRequest, setIsSentRequest] = React.useState<boolean>(false);

  function sendFriendRequest(strangerId: number) {
    friendService.default
      .sendFriendRequest({
        strangerId: strangerId
      })
      .then(() => {
        setIsSentRequest(true);
      });
  }

  return (
    <div>
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <img
          alt="profile"
          style={{ width: '50%', objectFit: 'contain', borderRadius: '8px 8px 0px 0px' }}
          src={
            peopleItem.profileImage
              ? `${API_URL}/photo/profile-image/400x${peopleItem.profileImage}`
              : defaultAvatar
          }></img>
      </div>
      <div style={{ padding: '8px 8px 16px 8px' }}>
        <Typography style={{ fontWeight: '600' }}>
          {peopleItem.name ? peopleItem.name : 'New User'}
        </Typography>
        <Typography style={{ fontSize: '.8rem' }}>
          {`${peopleItem.mutualFriend} mutual friend`}
        </Typography>
        <Button
          style={{ textTransform: 'none', display: 'block', width: '100%', marginTop: '16px' }}
          variant="contained"
          color="inherit"
          onClick={() => {
            navigate('/user-profile?userId=' + peopleItem.userId);
          }}>
          View profile
        </Button>
        <Button
          style={{ textTransform: 'none', display: 'block', width: '100%', marginTop: '8px' }}
          variant="contained"
          color="primary"
          disabled={isSentRequest ? true : false}
          onClick={() => {
            sendFriendRequest(peopleItem.userId);
            setIsSentRequest(true);
          }}>
          Add friend
        </Button>
      </div>
    </div>
  );
}

function ExplorePeople() {
  const [people, setPeople] = React.useState<IPeople[]>([]);

  useEffect(() => {
    friendService.default.getExplorePeople().then((res) => {
      setPeople([...res.data]);
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          marginBottom: '16px'
        }}>
        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '16px' }}>
          <Typography style={{ textAlign: 'center', color: 'rgb(100, 100, 100)' }}>
            People you may know
          </Typography>
          <Swiper spaceBetween={24} slidesPerView={2} style={{ width: '500px', marginTop: '16px' }}>
            {people.map((item: IPeople, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    border: '1px solid rgb(241, 241, 241)',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(241, 241, 241)'
                  }}>
                  <PeopleItem peopleItem={item}></PeopleItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ExplorePeople;
