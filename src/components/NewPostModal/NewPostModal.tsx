import { Box, Modal, Typography } from '@mui/material';

const NewPostModal = (props: any) => {
  return (
    <Modal open={props.showNewPostModal} onClose={props.handleCloseNewPostModal}>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          bgcolor: 'background.paper',
          borderRadius: 5,
          p: 4
        }}>
        <Typography variant="h3" align="center">
          Edit Profile
        </Typography>
      </Box>
    </Modal>
  );
};

export default NewPostModal;
