import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPeople } from 'src/common/interfaces/friend.interface';
import * as userService from './../services/user.service';

export default function useSearchUser({
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
  const [users, setUsers] = useState<IPeople[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      setError(false);
      userService.default
        .searchUser({
          page: page,
          pageSize: pageSize,
          searchQuery: searchQuery
        })
        .then((res) => {
          setUsers([...users, ...res.data]);
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
      userService.default
        .searchUser({
          page: page,
          pageSize: pageSize,
          searchQuery: searchQuery
        })
        .then((res) => {
          setUsers([...res.data]);
          setHasMore(res.data.length > 0);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [searchQuery]);

  return { userSearch: { loading, error, users, hasMore, setUsers } };
}
