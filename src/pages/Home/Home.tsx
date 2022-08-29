import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Bio from "src/components/Bio/Bio";
import Header from "src/components/Header/Header";
import BioModal from "../../components/BioModel/BioModal";
import Birthday from "../../components/Birthday/Birthday";
import FriendReq from "../../components/FriendReq/FriendReq";
import NewPost from "../../components/NewPost/NewPost";
import UserContextSetters from "../../contexts/user-context-setters";
// import AuthContext from "../../contexts/auth-context";

const Home = () => {
  // const userContextFetcher = useContext(UserContext).setUser;
  const userContextSetters = useContext(UserContextSetters);
  // const authContext = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      // await authContext.generateNewAccessToken();
      await userContextSetters.setUser();
    };
    setTimeout(() => {
      fetchUser().catch(console.error);
      setLoading(false);
    }, 1000);
  }, [userContextSetters]);

  const [showBioModal, setShowBioModal] = useState(false);

  const handleCloseBioModal = () => {
    setShowBioModal(false);
  }

  return (
    <Box position="fixed" width="100%">
      <Header />
      <BioModal showBioModal={showBioModal} handleCloseBioModal={handleCloseBioModal}/>
      <Box flex={1} overflow="auto" mt={3} mx={12}>
        <Grid
          container
          spacing={5}
          sx={{
            height: "100vh",
          }}
        >
          <Grid item xs>
            <Bio setShowBioModal={setShowBioModal} />
          </Grid>
          <Grid
            item
            xs={7}
            style={{ maxHeight: "100vh", overflow: "auto" }}
          >
            <NewPost />
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
