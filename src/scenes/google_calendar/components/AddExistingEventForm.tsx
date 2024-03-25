import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { parseISO, addDays } from 'date-fns';
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from '@mui/material';
import { tokens } from '../../../theme';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import React, { useEffect, useState } from 'react';
import { useGoogleCalendarContext } from '../../../context/GoogleCalendarProvider';
import { eventTemplateService } from '../../../shared/services/event-template.service';
import { EventTemplate } from '../../../API';
import { useAuthenticator } from '@aws-amplify/ui-react';

export const AddExistingEventForm = () => {
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
  const [isLoading, setIsLoading] = useState(false);
  const [templates, setTemplates] = useState<EventTemplate[]>([]);
  const [formState, setFormState] = useState({
    selectedTemplate: '',
    eventName: '',
    description: '',
    duration: 0,
    startDate: new Date(),
    calendarId,
  });

  useEffect(() => {
    if (user?.userId) {
      setIsLoading(true);
      eventTemplateService
        .getEventTemplatesByUserId(user.userId)
        .then((templates) => {
          setTemplates(templates);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

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

      hideEventForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectExistingEvent = (event: SelectChangeEvent) => {
    const eventTemplateId = event.target.value;
    if (eventTemplateId) {
      const eventTemplate = templates.find(
        (template) => template.id === eventTemplateId
      );
      setFormState((prev) => ({
        ...prev,
        selectedTemplate: eventTemplate.id,
        eventName: eventTemplate.eventName,
        description: eventTemplate.description,
        duration: eventTemplate.duration,
      }));
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box>
        <Typography variant="h3" mb={2}>
          Add Existing Event
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
              <FormControl fullWidth>
                <InputLabel
                  sx={{ color: `${colors.grey[100]} !important` }}
                  id="demo-simple-select-label"
                >
                  Event
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formState.selectedTemplate}
                  label="Event"
                  sx={{
                    '& fieldset': {
                      border: `1px solid ${colors.grey[100]} !important`,
                    },
                    '& label': {
                      color: `${colors.grey[100]} !important`,
                    },
                  }}
                  onChange={handleSelectExistingEvent}
                >
                  {templates.map((template) => (
                    <MenuItem value={template.id}>
                      {template.eventName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
    </>
  );
};
