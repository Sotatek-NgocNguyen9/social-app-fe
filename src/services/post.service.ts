import http from '../common/http-common';
import IPost from '../common/interfaces/post.interface';

const createPost = async (post: IPost) => {
  const formData = new FormData();
  formData.append('secure', post.secure);
  formData.append('content', post.content);
  post.media && formData.append('media', post.media);
  return await http.post('/post/create-post', post);
};

const PostService = { createPost };

export default PostService;
