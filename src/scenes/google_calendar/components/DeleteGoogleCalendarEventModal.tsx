import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useGoogleCalendarContext } from '../../../context/GoogleCalendarProvider';

export const DeleteGoogleCalendarEventModal = () => {
  const { selectedEvent, handleCloseDeleteEventModal, handleDeleteEvent } =
    useGoogleCalendarContext();

  const open = Boolean(selectedEvent);
  return (
    <Dialog open={open} onClose={handleCloseDeleteEventModal}>
      <DialogTitle>Delete Event</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete "{selectedEvent?.title}" event?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteEvent} color="error" variant="contained">
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCloseDeleteEventModal}
          autoFocus
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
