import { Paper } from '@mui/material';
import { appTheme } from '../../themes/theme';

const FriendReq = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: appTheme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: appTheme.spacing(1),
        textAlign: 'center',
        borderRadius: 8,
        height: '40vh',
        marginBottom: 2
      }}>
      {/* <Avatar /> */}
    </Paper>
  );
};

export default FriendReq;
