import {
  Box,
  Typography,
  TextField,
  AppBar,
  Toolbar,
  Paper,
  Stack,
  Grid,
  styled,
} from "@mui/material";
import Logo from "../../assets/logo.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Box>
      <AppBar
        sx={{ backgroundColor: "#fff", position: "fixed" }}
        elevation={0}
      >
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 48,
            }}
            alt="Your logo."
            src={Logo}
          />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Stack direction="row" alignItems="center" gap={1}>
            <AddCircleIcon />
            <Typography variant="body1">text</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item>xs</Item>
          </Grid>
          <Grid item xs={6} style={{ maxHeight: "100vh", overflow: "auto" }}>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs>
            <Item>xs</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
