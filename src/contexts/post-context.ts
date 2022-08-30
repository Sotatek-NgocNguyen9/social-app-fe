/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

const PostContext = React.createContext({ posts: [{}], getFeed: () => {} });

export default PostContext;
