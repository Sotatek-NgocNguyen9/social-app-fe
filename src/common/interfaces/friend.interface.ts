export interface IAcceptFriend {
  requesterId: number;
}

export interface IRefuseFriend {
  requesterId: number;
}

export interface ISendFriendRequest {
  strangerId: number;
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

export interface IPeople {
  userId: number;
  name: string;
  profileImage: string;
  location: string;
  mutualFriend: number;
}

export interface IGetExplorePeople {
  page: number;
  pageSize: number;
}

export interface ISearchUser {
  page: number;
  pageSize: number;
  searchQuery: string;
}

export interface ISearchPost {
  page: number;
  pageSize: number;
  searchQuery: string;
}

export interface IpostInfo {
  content: string;
  createDate: string;
  media: string;
  name: string;
  postId: number;
  profileImage: string;
  secure: string;
  userId: number;
  username: string;
}

export interface IGetAllPostByUserId {
  page: number;
  pageSize: number;
  userId: number;
}
