import { useContext } from "react";
import UserContext from "../../contexts/user-context";
import { Avatar, Box, CssBaseline, Divider, Grid, Paper, Typography } from "@mui/material";
import { appTheme } from "src/themes/theme";

const Bio = () => {
  const userContext = useContext(UserContext);

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: appTheme.palette.mode === "dark" ? "#1A2027" : "#fff",
        padding: appTheme.spacing(3),
        textAlign: "center",
        borderRadius: 8,
        height: "40vh",
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
            src={userContext.profileImage}
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
    </Paper>
  );
};

export default Bio;
