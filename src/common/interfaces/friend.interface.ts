export interface IAcceptFriend {
  requesterId: number;
}

export interface IRefuseFriend {
  requesterId: number;
}

export interface IFriendRequest {
  userId: number;
  name: string;
  profileImage: string;
  username: string;
}

export interface IFriend {
  userId: number;
  name: string;
  profileImage: string;
  username: string;
}

export interface IGetRequestList {
  page: number;
  pageSize: number;
}

export interface IGetFriendList {
  page: number;
  pageSize: number;
}
