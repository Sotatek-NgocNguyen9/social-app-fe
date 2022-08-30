import { useEffect, useState } from 'react';
import axios from 'axios';
import { IpostInfo } from 'src/common/interfaces/friend.interface';
import * as postService from './../services/post.service';

export default function useSearchPost({
  page,
  pageSize,
  searchQuery
}: {
  page: number;
  pageSize: number;
  searchQuery: string;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<IpostInfo[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      setError(false);
      postService.default
        .searchPost({
          page: page,
          pageSize: pageSize,
          searchQuery: searchQuery
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
  }, [page]);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      setError(false);

      postService.default
        .searchPost({
          page: page,
          pageSize: pageSize,
          searchQuery: searchQuery
        })
        .then((res) => {
          setPosts([...res.data]);
          setHasMore(res.data.length > 0);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [searchQuery]);

  return { postSearch: { loading, error, posts, hasMore } };
}
