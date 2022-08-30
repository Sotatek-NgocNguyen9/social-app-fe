import { Box, Modal, Typography, Button } from '@mui/material';

function MessageModal(props: any) {
  return (
    <Modal
      open={props.showMessageModal.message ? true : false}
      onClose={props.handleCloseMessageModal}>
      <Box
        sx={{
          outline: 'none',
          position: 'absolute' as const,
          border: '0px solid black',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: 5,
          p: 4
        }}>
        <div
          style={{
            position: 'relative',
            width: '300px',
            borderRadius: '16px',
            backgroundColor: 'white',
            padding: '24px 24px 24px 40px',
            maxHeight: '720px'
          }}>
          <Typography
            style={{
              textAlign: 'center',
              fontSize: '1.4rem',
              fontWeight: '700',
              marginBottom: '16px'
            }}>
            Message
          </Typography>
          <div
            style={{
              border: '1px solid #7b1fa2',
              padding: '20px 12px',
              borderRadius: '8px',
              minHeight: '52px'
            }}>
            <Typography>{props.showMessageModal.message}</Typography>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.handleCloseMessageModal}
              style={{ textTransform: 'none', boxShadow: 'none', padding: '6px 24px' }}>
              OK
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default MessageModal;
