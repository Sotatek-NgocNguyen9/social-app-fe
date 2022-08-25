import {
  AppBar,
  Avatar,
  Box,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as WatchIcon } from "../../assets/svg/watch.svg";
import { ReactComponent as MarketplaceIcon } from "../../assets/svg/marketplace.svg";
import { ReactComponent as GroupIcon } from "../../assets/svg/group.svg";

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        paddingTop: "3px",
        paddingBottom: "3px",
      }}
      elevation={0}
      position="sticky"
    >
      <Toolbar>
        <Box
          ml={9}
          mr={5}
          component="img"
          sx={{
            height: 40,
          }}
          alt="Your logo."
          src={Logo}
        />
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }} mr={9}>
          <Stack
            sx={{ textDecoration: "none" }}
            component={RouterLink}
            to="/sign-in"
            direction="row"
            alignItems="center"
            gap={1}
            ml={8}
          >
            <SvgIcon>
              <HomeIcon />
            </SvgIcon>
            <Typography
              display="inline"
              color="#000"
              variant="h6"
              align="right"
            >
              Homepage
            </Typography>
          </Stack>
          <Stack
            sx={{ textDecoration: "none" }}
            component={RouterLink}
            to="/sign-in"
            direction="row"
            alignItems="center"
            gap={1}
            ml={8}
          >
            <SvgIcon>
              <WatchIcon />
            </SvgIcon>
            <Typography color="#000" variant="h6">
              Watch
            </Typography>
          </Stack>
          <Stack
            sx={{ textDecoration: "none" }}
            component={RouterLink}
            to="/sign-in"
            direction="row"
            alignItems="center"
            gap={1}
            ml={8}
          >
            <SvgIcon>
              <MarketplaceIcon />
            </SvgIcon>
            <Typography color="#000" variant="h6">
              Marketplace
            </Typography>
          </Stack>
          <Stack
            sx={{ textDecoration: "none" }}
            component={RouterLink}
            to="/sign-in"
            direction="row"
            alignItems="center"
            gap={1}
            ml={8}
          >
            <SvgIcon>
              <GroupIcon />
            </SvgIcon>
            <Typography color="#000" variant="h6">
              Groups
            </Typography>
          </Stack>
          <Stack
            sx={{ textDecoration: "none" }}
            component={RouterLink}
            to="/sign-in"
            direction="row"
            alignItems="center"
            gap={1}
            ml={16}
          >
            <Avatar src="/src/assets/defaultAvatar.png"/>
            <Typography color="#000" variant="h6">
              Nguyen Quynh Anh
            </Typography>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
