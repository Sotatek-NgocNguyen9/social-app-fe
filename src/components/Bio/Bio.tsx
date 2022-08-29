import { useContext } from "react";
import UserContext from "../../contexts/user-context";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { appTheme } from "src/themes/theme";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/svg/linkedin.svg";
import { API_URL } from "../../common/common.constants";

const Bio = (props: any) => {
  const userContext = useContext(UserContext);

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: appTheme.palette.mode === "dark" ? "#1A2027" : "#fff",
        padding: appTheme.spacing(3),
        textAlign: "center",
        borderRadius: 8,
        marginBottom: 2,
      }}
    >
      <Grid
        container
        justifyContent="flex-start"
        direction="row"
        alignItems="center"
        spacing={1.5}
      >
        <Grid item justifyContent="center">
          <Avatar
            key={`${API_URL}/photo/profile-image/200x${userContext.profileImage}`}
            src={`${API_URL}/photo/profile-image/200x${userContext.profileImage}`}
            sx={{ width: 56, height: 56, marginBottom: 0.5 }}
            alt={userContext.name}
          />
        </Grid>
        <Grid item>
          <Typography align="left" variant="h5">
            {userContext.name}
          </Typography>
          <Typography align="left" color={appTheme.palette.gray.text}>
            {userContext.location}
          </Typography>
        </Grid>
      </Grid>

      <Box my={2}>
        <Divider
          variant="inset"
          component="li"
          sx={{ listStyleType: "none", margin: "0%" }}
        />
      </Box>

      <Typography align="left" variant="body2" color="#6F6F6F">
        {userContext.bio}
      </Typography>

      <Box my={2}>
        <Divider
          variant="inset"
          component="li"
          sx={{ listStyleType: "none", margin: "0%" }}
        />
      </Box>

      <Typography align="left" variant="h6" color={appTheme.palette.gray.text}>
        MY PAGES
      </Typography>

      {userContext.facebook !== "" && (
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
              {userContext.facebook}
            </Typography>
          </Stack>
        </Box>
      )}

      {userContext.instagram !== "" && (
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
              {userContext.instagram}
            </Typography>
          </Stack>
        </Box>
      )}

      {userContext.linkedin !== "" && (
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
              {userContext.linkedin}
            </Typography>
          </Stack>
        </Box>
      )}

      <Box>
        <Button
          style={{
            border: "1px solid #C8C8C8",
            borderRadius: "20px",
            color: "#C8C8C8",
            padding: "12px 24px",
            fontSize: "18px",
            width: "100%",
          }}
          color="primary"
          onClick={() => {
            props.setShowBioModal(true);
          }}
        >
          Edit
        </Button>
      </Box>
    </Paper>
  );
};

export default Bio;
