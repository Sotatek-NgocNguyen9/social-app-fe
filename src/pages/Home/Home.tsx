import { Box, Paper, Grid, styled } from "@mui/material";
import Header from "src/components/Header/Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Box position="fixed" width="100%">
      <Header />
      <Box
        flex={1}
        overflow="auto"
        mt={3}
        mx={12}
      >
        <Grid
          container
          spacing={5}
          sx={{
            height: "100vh",
          }}
        >
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
