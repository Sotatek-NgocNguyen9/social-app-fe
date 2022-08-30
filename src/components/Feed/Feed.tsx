import { Paper } from '@mui/material';
import { appTheme } from '../../themes/theme';
import { useContext } from 'react';
import PostContext from '../../contexts/post-context';
import Post from '../Post/Post';

const Feed = () => {
  const postContext = useContext(PostContext);

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: appTheme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: appTheme.spacing(3),
        textAlign: 'center',
        borderRadius: 8,
        marginBottom: 2
      }}>

      {postContext.posts.map((post) => (
        <Post post={post} key={post.toString().concat(Math.random().toString())} />

      ))}
    </Paper>
  );
};

export default Feed;
