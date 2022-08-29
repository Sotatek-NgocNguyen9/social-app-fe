import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appTheme } from 'src/themes/theme';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const Search = styled('div')(() => ({
    padding: appTheme.spacing(0, 0, 0, 0),
    position: 'relative',
    border: `1px solid #eee`,
    '&:focus-within': {
      outline: 'none',
      borderColor: `${appTheme.palette.primary.main}`
    },
    borderRadius: '30px',
    width: '100%',
    [appTheme.breakpoints.up('sm')]: {
      marginLeft: appTheme.spacing(3),
      width: 'auto'
    }
  }));

  const SearchIconWrapper = styled('div')(() => ({
    color: '#b6b6b6',
    '&:focus-within': {
      color: appTheme.palette.primary.main
    },
    padding: appTheme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }));

  const StyledInputBase = styled(InputBase)(() => ({
    color: '#eee',
    '&.Mui-focused': {
      color: '#b6b6b6'
    },
    '& .MuiInputBase-input': {
      padding: appTheme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${appTheme.spacing(4)})`,
      transition: appTheme.transitions.create('width'),
      width: '100%',
      [appTheme.breakpoints.up('md')]: {
        width: '40ch'
      }
    }
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
};

export default SearchBar;
