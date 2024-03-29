import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { v4 as uuid } from 'uuid';
import { Button, useTheme } from '@mui/material';
import { tokens } from '../../../theme';
import React, { useState } from 'react';
import { useGoogleCalendarContext } from '../../../context/GoogleCalendarProvider';
import { eventTemplateService } from '../../../shared/services/event-template.service';
import { useAuthenticator } from '@aws-amplify/ui-react';

export const AddNewEventForm = () => {
  const { user } = useAuthenticator();
  const {
    calendarId,

    hideEventForm,
  } = useGoogleCalendarContext();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [formState, setFormState] = useState({
    eventName: '',
    description: '',
    duration: '',

    calendarId,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.eventName) {
      return;
    }
    try {
      await eventTemplateService.createEventTemplate({
        duration: +formState.duration,
        eventName: formState.eventName,
        description: formState.description,
        id: uuid(),
        userId: user.userId,
      });
      hideEventForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Add New Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              autoComplete="off"
              id="calendarId"
              name="calendarId"
              fullWidth
              label="Calendar Id"
              variant="outlined"
              onChange={handleOnChange}
              value={formState.calendarId}
              sx={{
                '& fieldset': {
                  border: `1px solid ${colors.grey[100]} !important`,
                },
                '& label': {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              autoComplete="off"
              id="eventName"
              name="eventName"
              fullWidth
              label="Event Name"
              variant="outlined"
              onChange={handleOnChange}
              value={formState.eventName}
              sx={{
                '& fieldset': {
                  border: `1px solid ${colors.grey[100]} !important`,
                },
                '& label': {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              autoComplete="off"
              id="description"
              name="description"
              fullWidth
              label="Description"
              variant="outlined"
              onChange={handleOnChange}
              value={formState.description}
              sx={{
                '& fieldset': {
                  border: `1px solid ${colors.grey[100]} !important`,
                },
                '& label': {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              autoComplete="off"
              required
              id="duration"
              name="duration"
              fullWidth
              type="number"
              InputProps={{
                inputProps: { min: 1 },
              }}
              label="Duration"
              variant="outlined"
              onChange={handleOnChange}
              value={formState.duration}
              sx={{
                '& fieldset': {
                  border: `1px solid ${colors.grey[100]} !important`,
                },
                '& label': {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: colors.greenAccent[400],
                textTransform: 'unset',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: colors.greenAccent[400],
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
