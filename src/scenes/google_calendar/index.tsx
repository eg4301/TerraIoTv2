// @ts-nocheck

// import Calendar from '@ericz1803/react-google-calendar';
import { Box, useTheme, TextField, Button, Typography } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { useGoogleCalendarContext } from '../../context/GoogleCalendarProvider';
import { useGoogleLogin } from '@react-oauth/google';
import { AddNewEventForm } from './components/AddNewEventForm';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import { DeleteGoogleCalendarEventModal } from './components/DeleteGoogleCalendarEventModal';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const GoogleCalendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const login = useGoogleLogin({
    onSuccess: handleGoogleCredentials,
    auto_select: true,
    flow: 'implicit',
    prompt: 'select_account',
    scope:
      'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly',
  });

  const {
    calendarId,
    openCalendar,
    openEventForm,
    displayEvents,
    handleOnChange,
    setGoogleSession,
    googleSession,
    displayEventForm,
    events,
    handleSelectEvent,
  } = useGoogleCalendarContext();

  function handleGoogleCredentials(credentials) {
    setGoogleSession(credentials);
  }

  return (
    <>
      <Box m="20px">
        <Header title="Google Calendar" subtitle="Events at a Glance" />
        {googleSession ? (
          <>
            {!openEventForm && (
              <Box display="flex" justifyContent="center" gap="10px" mt={2}>
                <TextField
                  autoComplete="off"
                  id="calendarId"
                  name="calendarId"
                  label="Google Calendar ID"
                  variant="outlined"
                  onChange={handleOnChange}
                  value={calendarId}
                  sx={{
                    '& fieldset': {
                      border: `1px solid ${colors.grey[100]} !important`,
                    },
                    '& label': {
                      color: `${colors.grey[100]} !important`,
                    },
                  }}
                />
                <Button
                  onClick={displayEvents}
                  variant="contained"
                  sx={{
                    backgroundColor: colors.greenAccent[400],
                    textTransform: 'capitalize',

                    '&:hover': {
                      backgroundColor: colors.greenAccent[400],
                    },
                  }}
                >
                  Google Events
                </Button>
              </Box>
            )}
            <div
              style={{
                width: '90%',
                paddingTop: '50px',
                paddingBottom: '50px',
                margin: 'auto',
                maxWidth: '1200px',
              }}
            >
              {openCalendar && (
                <>
                  <Box display="flex" justifyContent="flex-end" my={2}>
                    <Button
                      onClick={displayEventForm}
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
                      Add New Event
                    </Button>
                  </Box>
                  <Calendar
                    localizer={localizer}
                    events={events}
                    views={['month', 'week', 'day', 'agenda']}
                    defaultView="month"
                    startAccessor="start"
                    endAccessor="end"
                    onSelectEvent={handleSelectEvent}
                    step={10}
                    style={{ minHeight: 800 }}
                  />
                </>
              )}
              {openEventForm && <AddNewEventForm />}
            </div>
          </>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="center"
          >
            <Typography variant="body1">
              To manage google calendar, You need to grant permission to this
              app to your calendar.
            </Typography>
            <Button
              onClick={login}
              sx={{
                display: 'flex',
                gap: '10px',
                backgroundColor: '#fff',
                borderRadius: '7px',
                '&:hover': {
                  backgroundColor: '#fff',
                },
              }}
            >
              <img
                width={25}
                height={25}
                src="/assets/GoogleIcon.svg"
                alt="Google Icon"
              />
              <Typography variant="h5">Sign In with Google</Typography>
            </Button>
          </Box>
        )}
      </Box>
      <DeleteGoogleCalendarEventModal />
    </>
  );
};

export default GoogleCalendar;
