// @ts-nocheck

import Calendar from '@ericz1803/react-google-calendar';
import { css } from '@emotion/react';
import { Box, useTheme, TextField, Button } from '@mui/material';
import Header from '../../components/Header';
import { ColorModeContext, tokens } from '../../theme';
import { useGoogleCalendarContext } from '../../context/GoogleCalendarProvider';

let styles = {
  //you can use object styles
  calendar: {
    borderWidth: '3px',
    color: 'white', //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    /* highlight today by making the text red and giving it a light blue border */
    color: #42f5ec;
    border: 1px solid #42f5ec;
  `,
};

const GoogleCalendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { apiKey, calendarId, display, displayEvents, handleOnChange } =
    useGoogleCalendarContext();

  return (
    <>
      <Box m="20px">
        <Header title="Google Calendar" subtitle="Events at a Glance" />
        <Box display="flex" justifyContent="center" gap="10px" mt={2}>
          <TextField
            autoComplete="off"
            id="apiKey"
            name="apiKey"
            fullwidth
            label="Google API Key"
            variant="outlined"
            onChange={handleOnChange}
            sx={{
              '& fieldset': {
                border: `1px solid ${colors.grey[100]} !important`,
              },
              '& label': {
                color: `${colors.grey[100]} !important`,
              },
            }}
          />
          <TextField
            autoComplete="off"
            id="calendarId"
            name="calendarId"
            fullwidth
            label="Google Calendar ID"
            variant="outlined"
            onChange={handleOnChange}
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
        {display ? (
          <div
            style={{
              width: '90%',
              paddingTop: '50px',
              paddingBottom: '50px',
              margin: 'auto',
              maxWidth: '1200px',
            }}
          >
            <Calendar
              apiKey={apiKey}
              calendars={[
                {
                  calendarId: calendarId,
                },
              ]}
              styles={styles}
            />
          </div>
        ) : null}
      </Box>
    </>
  );
};

export default GoogleCalendar;