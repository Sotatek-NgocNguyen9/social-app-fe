import {
  Avatar,
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import UserContext from "../../contexts/user-context";
import { appTheme } from "../../themes/theme";
import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";

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
            <Stack>
              <Typography align="left" variant="h5">
                {userContext.name}
              </Typography>
              <SvgIcon>
                <EditIcon />
              </SvgIcon>
            </Stack>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 2 }}>
          You have signed up to Social App. Please check your email for
          confirmation email.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Closing this dialog will redirect you to sign in page!
        </Typography>
      </Box>
    </Modal>
  );
};

export default BioModal;
