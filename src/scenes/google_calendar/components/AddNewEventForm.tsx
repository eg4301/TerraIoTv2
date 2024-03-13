import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, useTheme } from '@mui/material';
import { tokens } from '../../../theme';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import React, { useState } from 'react';
import { useGoogleCalendarContext } from '../../../context/GoogleCalendarProvider';
import { parseISO } from 'date-fns';

export const AddNewEventForm = () => {
  const {
    calendarId,
    googleSession,
    handleAddNewEvent,
    hideEventForm,
    clearGoogleSession,
  } = useGoogleCalendarContext();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [formState, setFormState] = useState({
    eventName: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    calendarId,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (field: string) => (newValue) => {
    setFormState((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.eventName) {
      return;
    }
    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + googleSession.access_token,
          },
          body: JSON.stringify({
            summary: formState.eventName,
            description: formState.description,
            end: {
              dateTime: formState.endDate.toISOString(),
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            start: {
              dateTime: formState.startDate.toISOString(),
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
          }),
        }
      );

      const event = await response.json();
      if (
        event?.error?.code === 401 &&
        event?.error?.status === 'UNAUTHENTICATED'
      ) {
        clearGoogleSession();
        return;
      }
      handleAddNewEvent({
        title: event.summary,
        start: parseISO(event.start.dateTime),
        end: parseISO(event.end.dateTime),
        allDay: false,
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
            <MobileDateTimePicker
              name="startDate"
              label="Start Date"
              sx={{
                width: '100%',
                '& fieldset': {
                  border: `1px solid ${colors.grey[100]} !important`,
                },
                '& label': {
                  color: `${colors.grey[100]} !important`,
                },
              }}
              value={formState.startDate}
              onChange={handleDateChange('startDate')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MobileDateTimePicker
              label="End Date"
              name="endDate"
              sx={{
                width: '100%',

                '& fieldset': {
                  border: `1px solid ${colors.grey[100]} !important`,
                },
                '& label': {
                  color: `${colors.grey[100]} !important`,
                },
              }}
              value={formState.endDate}
              onChange={handleDateChange('endDate')}
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
