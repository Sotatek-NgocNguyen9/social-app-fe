import { TextField, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import _ from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';
import { IPeople } from 'src/common/interfaces/friend.interface';
import * as userService from './../../services/user.service';
import { API_URL } from './../../common/common.constants';
import defaultAvatar from './../../assets/defaultAvatar.png';

function SearchItem({ searchItem, setUsers }: { searchItem: IPeople; setUsers: any }) {
  const navigate = useNavigate();

  return (
    <Button
      color="primary"
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        width: '100%',
        textAlign: 'left',
        justifyContent: 'flex-start',
        textTransform: 'none'
      }}
      onClick={() => {
        setUsers([]);
        navigate('/user-profile?userId=' + searchItem.userId);
      }}>
      <div style={{ height: '32px', width: '32px', borderRadius: '50%', overflow: 'hidden' }}>
        <img
          alt="profile"
          style={{ maxHeight: '100%' }}
          src={
            searchItem.profileImage
              ? `${API_URL}/photo/profile-image/${searchItem.profileImage}`
              : defaultAvatar
          }></img>
      </div>
      <div style={{ textAlign: 'left' }}>
        <Typography style={{ fontSize: '.8rem', fontWeight: '500', color: 'black' }}>
          {searchItem.name ? searchItem.name : 'New User'}
        </Typography>
        <Typography style={{ color: '#ACACAC', fontSize: '.7rem', fontWeight: '500' }}>
          {searchItem.mutualFriend} mutual friend
        </Typography>
      </div>
    </Button>
  );
}

const SearchBar = () => {
  const [users, setUsers] = React.useState<any>([]);
  const searchInput = React.useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);
  const location = useLocation();

  const debouncedSearch = _.debounce(async (searchQuery: string) => {
    if (searchQuery) {
      userService.default
        .searchUser({
          searchQuery: searchQuery,
          page: 1,
          pageSize: 7
        })
        .then((res) => {
          setUsers([...res.data]);
        });
      setSearchQuery(searchQuery);
    }
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return (
    <div>
      <TextField
        className="search-field"
        id="search-field"
        placeholder="Search"
        variant="outlined"
        size="small"
        InputProps={{
          style: {
            fontSize: '.8rem',
            backgroundColor: '#F1F1F1',
            borderRadius: '20px',
            padding: '6px 12px 3px 12px'
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          )
        }}
        onChange={handleChange}
        ref={searchInput}
        style={{ padding: '4px', width: '298px' }}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            if (searchQuery) {
              navigate('/search-all?searchQuery=' + searchQuery);
            }
          }
        }}
      />
      {users.length ? (
        <div
          style={{
            position: 'absolute',
            width: '300px',
            minHeight: '80px',
            backgroundColor: 'white',
            top: '80px',
            borderRadius: '8px',
            boxShadow: '1px 1px 10px #e8e4e3'
          }}>
          <div style={{ position: 'relative', padding: '16px' }}>
            <IconButton
              color="default"
              edge="end"
              size="small"
              style={{
                marginBottom: '3px',
                position: 'absolute',
                zIndex: '100',
                top: '8px',
                right: '8px'
              }}
              onClick={() => {
                setUsers([]);
              }}>
              <CancelIcon></CancelIcon>
            </IconButton>
            {users.map((searchItem: IPeople, index: number) => {
              return (
                <div key={index}>
                  <SearchItem key={index} searchItem={searchItem} setUsers={setUsers}></SearchItem>
                  <div
                    style={{
                      height: '0.5px',
                      width: '100%',
                      backgroundColor: '#F1F1F1',
                      margin: '4px 0 4px 0'
                    }}></div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default SearchBar;
