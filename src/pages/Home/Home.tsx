import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Bio from "src/components/Bio/Bio";
import Header from "src/components/Header/Header";
import UserContext from "src/contexts/user-context";
import BioModal from "../../components/BioModel/BioModal";
import Birthday from "../../components/Birthday/Birthday";
import FriendReq from "../../components/FriendReq/FriendReq";

const Home = () => {
  const userContext = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      // await authContext.generateNewAccessToken();
      await userContext.setUser();
    };
    setTimeout(() => {
      fetchUser().catch(console.error);
      setLoading(false);
    }, 1000);
  }, []);

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
          ></Grid>
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
