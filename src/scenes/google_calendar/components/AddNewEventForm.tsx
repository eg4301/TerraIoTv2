import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { parseISO, addDays } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { Button, Checkbox, FormControlLabel, useTheme } from '@mui/material';
import { tokens } from '../../../theme';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import React, { useState } from 'react';
import { useGoogleCalendarContext } from '../../../context/GoogleCalendarProvider';
import { eventTemplateService } from '../../../shared/services/event-template.service';
import { useAuthenticator } from '@aws-amplify/ui-react';

export const AddNewEventForm = () => {
  const { user } = useAuthenticator();
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
    duration: '',
    startDate: new Date(),
    endDate: new Date(),
    calendarId,
    isTemplate: false,
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
              dateTime: addDays(
                formState.startDate,
                +formState.duration
              ).toISOString(),
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
      if (formState.isTemplate) {
        await eventTemplateService.createEventTemplate({
          duration: +formState.duration,
          eventName: event.summary,
          description: event.description,
          id: uuid(),
          userId: user.userId,
        });
      }
      hideEventForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleTemplateChecbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      isTemplate: event.target.checked,
    }));
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
          {/* <Grid item xs={12} md={6}>
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
          </Grid> */}

          <Grid item xs={12}>
            <FormControlLabel
              onChange={handleTemplateChecbox}
              control={<Checkbox color="secondary" />}
              label="Create Event Template"
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
