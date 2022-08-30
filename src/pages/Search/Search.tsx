import { Typography, Button, Box, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './../../components/Header/Header';
import defaultAvarar from './../../assets/defaultAvatar.png';
import { API_URL } from './../../common/common.constants';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useSearchUser from 'src/hooks/use-search-user';
import useSearchPost from 'src/hooks/use-search-post';
import { IPeople, IpostInfo } from 'src/common/interfaces/friend.interface';
import Post from 'src/components/Post/Post';
import { appTheme } from '../../themes/theme';

function UserProfile() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [searchUser, setSearchUser] = React.useState<any>({
    page: 1,
    pageSize: 5
  });
  const navigate = useNavigate();
  const [searchPost, setSearchPost] = React.useState<any>({
    page: 1,
    pageSize: 5
  });

  const { userSearch } = useSearchUser({ ...searchUser, searchQuery: searchQuery });
  const { postSearch } = useSearchPost({ ...searchPost, searchQuery: searchQuery });
  const observer = React.useRef<any>(null);

  const lastPostElement = React.useCallback<any>(
    (node: any) => {
      if (postSearch.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && postSearch.hasMore) {
          setSearchPost({ ...searchPost, page: searchPost.page + 1 });
        }
      });
      if (node) observer.current.observe(node);
    },
    [postSearch.loading, postSearch.hasMore]
  );

  useEffect(() => {
    const query = searchParams.get('searchQuery');
    setSearchPost({ ...searchPost, page: 1 });
    setSearchQuery(String(query));
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box width="100%">
      <Header />
      <div
        style={{
          backgroundColor: '#F1F1F1',
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
          minHeight: '100vh'
        }}>
        <div style={{ flex: '2' }}></div>
        <div style={{ flex: '3.5' }}>
          <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                // padding: '16px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
              <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '24px' }}>
                {userSearch.users.length ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {userSearch.users.map((user: IPeople, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '8px',
                            backgroundColor: 'rgb(241, 241, 241)',
                            padding: '16px',
                            borderRadius: '16px',
                            alignItems: 'center'
                          }}>
                          <div
                            style={{
                              height: '32px',
                              width: '32px',
                              borderRadius: '50%',
                              overflow: 'hidden'
                            }}>
                            <img
                              alt="profile"
                              style={{ maxHeight: '100%' }}
                              src={
                                user.profileImage
                                  ? `${API_URL}/photo/profile-image/${user.profileImage}`
                                  : defaultAvarar
                              }></img>
                          </div>
                          <div style={{ textAlign: 'left' }}>
                            <Button
                              disableRipple
                              style={{
                                backgroundColor: 'transparent',
                                textTransform: 'none',
                                padding: '0'
                              }}
                              onClick={() => {
                                navigate('/user-profile?userId=' + user.userId);
                              }}>
                              <Typography
                                style={{ fontSize: '.8rem', fontWeight: '500', color: 'black' }}>
                                {user.name ? user.name : 'New User'}
                              </Typography>
                            </Button>
                            <Typography
                              style={{
                                color: '#ACACAC',
                                fontSize: '.7rem',
                                fontWeight: '500',
                                marginLeft: '8px'
                              }}>
                              {user.mutualFriend} mutual friend
                            </Typography>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ''
                )}
              </div>

              <Paper
                elevation={0}
                sx={{
                  backgroundColor: appTheme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  padding: appTheme.spacing(3),
                  textAlign: 'center',
                  borderRadius: 8,
                  marginBottom: 2
                }}>
                {!postSearch.posts.length ? <Typography>nothing to show</Typography> : null}
                {postSearch.posts.map((post: IpostInfo, index) => {
                  if (postSearch.posts.length === index + 1) {
                    return (
                      <div
                        ref={lastPostElement}
                        key={index}
                        style={{
                          backgroundColor: 'white',
                          borderRadius: '16px',
                          textAlign: 'center'
                        }}>
                        <Post style={{ backgroundColor: 'white' }} post={post}></Post>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        ref={lastPostElement}
                        key={index}
                        style={{ backgroundColor: 'white', borderRadius: '16px' }}>
                        <Post style={{ backgroundColor: 'white' }} post={post}></Post>
                      </div>
                    );
                  }
                })}
              </Paper>
            </div>
          </div>
        </div>
        <div style={{ flex: '2' }}></div>
      </div>
    </Box>
  );
}

export default UserProfile;
