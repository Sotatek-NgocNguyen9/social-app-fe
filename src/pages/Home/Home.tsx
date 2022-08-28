import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Bio from "src/components/Bio/Bio";
import Header from "src/components/Header/Header";
import UserContext from "src/contexts/user-context";
import Birthday from "../../components/Birthday/Birthday";
import FriendReq from "../../components/FriendReq/FriendReq";

const Home = () => {
  const userContext = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await userContext.setUser({
        userId: 1,
        username: "nguyenquynhanh@gmail.com",
        name: "Nguyen Quynh Anh",
        email: "nguyenquynhanh@gmail.com",
        profileImage:
          "https://pickaface.net/gallery/avatar/unr_test_180316_0529_vkbto.png",
        bio: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', ",
        location: "Hanoi, Vietnam",
        facebook: "",
        instagram: "quynh_anh700",
        linkedin: "quynh_anh800",
        isActivate: true,
      });
    };
    setTimeout(() => {
      fetchUser().catch(console.error);
      setLoading(false);
    }, 1000);
  }, [userContext]);

  console.log(loading);

  return (
    <Box position="fixed" width="100%">
      <Header />
      <Box flex={1} overflow="auto" mt={3} mx={12}>
        <Grid
          container
          spacing={5}
          sx={{
            height: "100vh",
          }}
        >
          <Grid item xs>
            <Bio />
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
