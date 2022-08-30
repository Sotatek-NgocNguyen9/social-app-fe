import { useCallback, useMemo, useState } from 'react';
import PostService from '../services/post.service';
import PostContext from './post-context';

const PostContextProvider = (props: any) => {
  const [posts, setPosts] = useState([]);

  const getFeed = useCallback(() => {
    PostService.getFeed().then((response) => {
      setPosts(response.data);
    });
  }, []);

  const postContext = useMemo(() => {
    return { posts, getFeed };
  }, [posts, getFeed]);

  return <PostContext.Provider value={postContext}>{props.children}</PostContext.Provider>;
};

export default PostContextProvider;
