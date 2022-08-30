import { Avatar, Box, Divider, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { API_URL } from '../../common/common.constants';
import { appTheme } from '../../themes/theme';

const Post = (props: any) => {
  useEffect(() => {
    console.log('Post rendered');
  }, []);

  return (
    <Box my={3}>
      <Grid container justifyContent="flex-start" direction="row" alignItems="center" spacing={1.5}>
        <Grid item justifyContent="center">
          <Avatar
            key={`${API_URL}/photo/profile-image/200x${props.post.profileImage}`}
            src={`${API_URL}/photo/profile-image/200x${props.post.profileImage}`}
            sx={{ width: 56, height: 56, marginBottom: 0.5 }}
            alt={props.post.name}
          />
        </Grid>
        <Grid item>
          <Typography align="left" variant="h6">
            {props.post.name}
          </Typography>
          <Typography align="left" color={appTheme.palette.gray.text}>
            {new Date(props.post.createDate).toLocaleDateString()}
          </Typography>
        </Grid>
      </Grid>
      <Typography align="left" mt={2} mb={2}>
        {props.post.content}
      </Typography>
      {props.post.media != '' && (
        <img
          style={{ borderRadius: '15px', width: '50%' }}
          src={`${API_URL}/photo/post-image/${props.post.media}`}
        />
      )}
      <Box my={4}>
        <Divider variant="inset" component="li" sx={{ listStyleType: 'none', margin: '0%' }} />
      </Box>
    </Box>
  );
};

export default Post;
