import {
  IAcceptFriend,
  IGetFriendList,
  IGetRequestList,
  IRefuseFriend,
  ISendFriendRequest
} from 'src/common/interfaces/friend.interface';
import http from '../common/http-common';

const acceptFriend = async (payload: IAcceptFriend) => {
  return await http.post('/friend/accept-friend-request', payload);
};

const sendFriendRequest = async (payload: ISendFriendRequest) => {
  return await http.post('/friend/send-friend-request', payload);
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

const getExplorePeople = async () => {
  return await http.get('/friend/explore-people');
};

const FriendService = {
  acceptFriend,
  refuseFriend,
  getRequestList,
  getFriendList,
  sendFriendRequest,
  getExplorePeople
};

export default FriendService;
