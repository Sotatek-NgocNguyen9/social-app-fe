import { useEffect, useState } from 'react';
import { IpostInfo } from 'src/common/interfaces/friend.interface';
import * as postService from './../services/post.service';

export default function useGetAllPostByUserId({
  page,
  pageSize,
  userId
}: {
  page: number;
  pageSize: number;
  userId: number;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<IpostInfo[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      setError(false);
      postService.default
        .getAllPostByUserId({
          page: page,
          pageSize: pageSize,
          userId: userId
        })
        .then((res) => {
          if (page === 1) {
            setPosts([...res.data]);
          } else {
            setPosts([...posts, ...res.data]);
          }
          setHasMore(res.data.length > 0);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [page, userId]);

  return { getPost: { loading, error, posts, hasMore } };
}
