import { Box, Grid } from '@mui/material';
import Bio from 'src/components/Bio/Bio';
import Header from 'src/components/Header/Header';
import BioModal from '../../components/BioModel/BioModal';
import Birthday from '../../components/Birthday/Birthday';
import FriendReq from '../../components/FriendReq/FriendReq';
import NewPost from '../../components/NewPost/NewPost';
import NewPostModal from '../../components/NewPostModal/NewPostModal';
import useHome from '../../hooks/use-home';

const Home = () => {
  const {
    loading,
    showBioModal,
    setShowBioModal,
    handleCloseBioModal,
    showNewPostModal,
    setShowNewPostModal,
    handleCloseNewPostModal
  } = useHome();

  return (
    <Box position="fixed" width="100%">
      <Header />
      <BioModal showBioModal={showBioModal} handleCloseBioModal={handleCloseBioModal} />
      <NewPostModal
        showNewPostModal={showNewPostModal}
        handleCloseNewPostModal={handleCloseNewPostModal}
      />
      <Box flex={1} overflow="auto" mt={3} mx={12}>
        <Grid
          container
          spacing={5}
          sx={{
            height: '100vh'
          }}>
          <Grid item xs>
            <Bio setShowBioModal={setShowBioModal} />
          </Grid>
          <Grid item xs={7} style={{ maxHeight: '100vh', overflow: 'auto' }}>
            <NewPost setShowNewPostModal={setShowNewPostModal} />
          </Grid>
          <Grid item xs>
            <FriendReq />
            <Birthday />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
