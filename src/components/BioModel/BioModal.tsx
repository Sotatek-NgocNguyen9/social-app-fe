import {
  Avatar,
  Box,
  Divider,
  Grid,
  Modal,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import UserContext from "../../contexts/user-context";
import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/svg/linkedin.svg";

const BioModal = (props: any) => {
  const userContext = useContext(UserContext);

  return (
    <Modal open={props.showBioModal} onClose={props.handleCloseBioModal}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          bgcolor: "background.paper",
          borderRadius: 5,
          p: 4,
        }}
      >
        <Typography variant="h3" align="center">
          Edit Profile
        </Typography>

        <Grid container alignItems="center" mt={3}>
          <Grid item>
            <Stack direction="row" alignItems="center">
              <Avatar
                src={userContext.profileImage}
                sx={{
                  width: 72,
                  height: 72,
                  marginBottom: 0.5,
                  marginRight: 2,
                }}
                alt={userContext.name}
              />
              <Typography align="right" variant="h4">
                {userContext.name}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h4" align="left" mt={3}>
              Location
            </Typography>
            <Typography variant="body1" align="left" mt={1}>
              {userContext.location}
            </Typography>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box my={4}>
          <Divider
            variant="inset"
            component="li"
            sx={{ listStyleType: "none", margin: "0%" }}
          />
        </Box>

        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h4" align="left">
              Bio
            </Typography>
            <Typography variant="body1" align="left" mt={1}>
              {userContext.bio ? userContext.bio : "Not Available"}
            </Typography>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box my={4}>
          <Divider
            variant="inset"
            component="li"
            sx={{ listStyleType: "none", margin: "0%" }}
          />
        </Box>

        <Typography variant="h4" align="left" mb={2}>
          My pages
        </Typography>
        <Grid container alignItems="center">
          <Grid item>
            <Box my={1} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Stack
                sx={{ textDecoration: "none", margin: 0 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={1}
                ml={8}
              >
                <SvgIcon>
                  <FacebookIcon />
                </SvgIcon>
                <Typography align="left" color="#000" variant="body2">
                  {userContext.facebook
                    ? userContext.facebook
                    : "Not Available"}
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <Box my={1} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Stack
                sx={{ textDecoration: "none", margin: 0 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={1}
                ml={8}
              >
                <SvgIcon>
                  <InstagramIcon />
                </SvgIcon>
                <Typography align="left" color="#000" variant="body2">
                  {userContext.instagram
                    ? userContext.instagram
                    : "Not Available"}
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <Box my={1} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Stack
                sx={{ textDecoration: "none", margin: 0 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={1}
                ml={8}
              >
                <SvgIcon>
                  <LinkedInIcon />
                </SvgIcon>
                <Typography align="left" color="#000" variant="body2">
                  {userContext.linkedin
                    ? userContext.linkedin
                    : "Not Available"}
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs>
            <Grid container direction="row-reverse">
              <Grid item>
                <Stack direction="row" alignItems="center">
                  <SvgIcon>
                    <EditIcon />
                  </SvgIcon>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default BioModal;
