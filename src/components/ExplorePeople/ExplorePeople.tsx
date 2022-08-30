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
          height: '180px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <img
          alt="profile"
          style={{ maxWidth: '100%', objectFit: 'cover', borderRadius: '8px 8px 0px 0px' }}
          src={
            peopleItem.profileImage
              ? `${API_URL}/profile-image/${peopleItem.profileImage}`
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
    <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '100%',
          padding: '16px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'relative'
        }}>
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px' }}>
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
