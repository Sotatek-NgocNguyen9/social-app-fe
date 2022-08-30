import http from '../common/http-common';
import IPost from '../common/interfaces/post.interface';

const createPost = async (post: IPost) => {
  const formData = new FormData();
  formData.append('secure', post.secure);
  formData.append('content', post.content);
  post.media && formData.append('media', post.media);
  return await http.post('/post/create-post', formData);
};

const getFeed = async () => {
  return await http.post('/post/feeds', { page: 1, pageSize: 100 });
};

const getUserPosts = async () => {
  return await http.post('/post/get-all-of-user', { page: 1, pageSize: 100 });
};

const PostService = { createPost, getFeed, getUserPosts };

export default PostService;
