import { useContext } from "react";
import { Avatar, Box, Divider, Paper, Stack, SvgIcon, Typography } from "@mui/material";
import UserContext from "../../contexts/user-context";
import { appTheme } from "../../themes/theme";
import { API_URL } from "../../common/common.constants";
import { ReactComponent as ImageIcon } from "../../assets/svg/image.svg";
import { ReactComponent as VideoIcon } from "../../assets/svg/video.svg";
import { ReactComponent as AttachmentIcon } from "../../assets/svg/attachment.svg";
import { ReactComponent as HashtagIcon } from "../../assets/svg/hashtag.svg";


const NewPost = () => {
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
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          key={`${API_URL}/photo/profile-image/200x${userContext.profileImage}`}
          src={`${API_URL}/photo/profile-image/200x${userContext.profileImage}`}
          sx={{ width: 56, height: 56, marginBottom: 0.5 }}
          alt={userContext.name}
        />
        <Box
          sx={{
            backgroundColor: appTheme.palette.gray.background,
            width: "100%",
            borderRadius: 15,
            padding: "15px 10px 15px 10px",
          }}
        >
          <Typography align="left" color={appTheme.palette.gray.text}>
            Share something...
          </Typography>
        </Box>
      </Stack>

      <Box my={3}>
        <Divider
          variant="inset"
          component="li"
          sx={{ listStyleType: "none", margin: "0%" }}
        />
      </Box>

      <Stack direction="row" alignItems="center" spacing={5}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <SvgIcon>
            <ImageIcon />
          </SvgIcon>
          <Typography variant="h6">Image</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <SvgIcon>
            <VideoIcon />
          </SvgIcon>
          <Typography variant="h6">Video</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <SvgIcon>
            <AttachmentIcon />
          </SvgIcon>
          <Typography variant="h6">Attachment</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <SvgIcon>
            <HashtagIcon />
          </SvgIcon>
          <Typography variant="h6">Hashtag</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default NewPost;
