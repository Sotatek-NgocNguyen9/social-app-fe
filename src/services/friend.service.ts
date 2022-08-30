import {
  IAcceptFriend,
  IGetFriendList,
  IGetRequestList,
  IRefuseFriend
} from 'src/common/interfaces/friend.interface';
import http from '../common/http-common';

const acceptFriend = async (payload: IAcceptFriend) => {
  return await http.post('/friend/accept-friend-request', payload);
};

const refuseFriend = async (payload: IRefuseFriend) => {
  return await http.post('/friend/delete-friend-request', payload);
};

const getRequestList = async (payload: IGetRequestList) => {
  return await http.post('/friend/get-all-friend-request', payload);
};

const getFriendList = async (payload: IGetFriendList) => {
  return await http.post('/friend/get-all-friend', payload);
};

const FriendService = {
  acceptFriend,
  refuseFriend,
  getRequestList,
  getFriendList
};

export default FriendService;
