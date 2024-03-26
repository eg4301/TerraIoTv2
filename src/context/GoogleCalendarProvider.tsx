import { TokenResponse } from '@react-oauth/google';
import React, { useContext, useState } from 'react';

type GoogleSession = Omit<
  TokenResponse,
  'error_description' | 'error' | 'error_ui'
>;

export enum EventForm {
  NEW_EVENT = 'new_event',
  EXISTING_EVENT = 'exiting_event',
  ONCE_OFF_EVENT = 'once_off_event',
  NONE = 'none',
}

export type Event = {
  start: Date;
  end: Date;
  title: string;
  allDay: boolean;
  id?: string;
};

type GoogleCalendarContextValueType = {
  googleSession: GoogleSession | null;
  events: Event[];
  eventForm: EventForm;
  selectedEvent: Event | null;
  calendarId: string;
  openCalendar: boolean;
  displayEvents: () => void;
  displayEventForm: (eventForm: EventForm) => () => void;
  setGoogleSession: (credentials: GoogleSession) => void;
  handleAddNewEvent: (event: Event) => void;
  hideEventForm: () => void;
  clearGoogleSession: () => void;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectEvent: (event: Event) => void;
  handleCloseDeleteEventModal: () => void;
  handleDeleteEvent: () => void;
};

const GoogleCalendarContext =
  React.createContext<GoogleCalendarContextValueType>({
    calendarId: '',
    eventForm: EventForm.NONE,
    selectedEvent: null,
    events: [],
    openCalendar: false,
    displayEvents: () => {},
    displayEventForm: () => () => {},
    handleOnChange: () => {},
    setGoogleSession: () => {},
    handleAddNewEvent: () => {},
    hideEventForm: () => {},
    clearGoogleSession: () => {},
    handleSelectEvent: () => {},
    handleCloseDeleteEventModal: () => {},
    handleDeleteEvent: () => {},
    googleSession: null,
  });

export const GoogleCalendarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState(() => {
    const googleSession = localStorage.getItem('TerraIoT-Google-Session');
    let parsedGoogleSession: null | GoogleSession = null;
    if (googleSession) {
      parsedGoogleSession = JSON.parse(googleSession) as GoogleSession;
    }

    return {
      apiKey: '',
      calendarId: '',
      openCalendar: false,
      eventForm: EventForm.NONE,
      googleSession: parsedGoogleSession,
      events: [],
      selectedEvent: null,
    };
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const hideEventForm = () => {
    setState((prev) => ({
      ...prev,
      eventForm: EventForm.NONE,
      openCalendar: true,
    }));
  };

  const handleAddNewEvent = (event: Event) => {
    setState((prev) => ({
      ...prev,
      events: [...prev.events, event],
    }));
  };

  const displayEvents = async () => {
    if (state.calendarId) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${state.calendarId}/events`,
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + state.googleSession.access_token,
            },
          }
        );
        const result = await response.json();

        if (
          result?.error?.code === 401 &&
          result?.error?.status === 'UNAUTHENTICATED'
        ) {
          clearGoogleSession();
          return;
        }
        const events = result.items.map((item) => ({
          title: item.summary,
          start: new Date(item.start.dateTime),
          end: new Date(item.end.dateTime),
          id: item.id,
        }));
        setState((prev) => ({
          ...prev,
          openCalendar: true,
          openEventForm: false,
          events,
        }));
      } catch (error) {
        console.error(error);
      }
    }
  };
  const displayEventForm = (eventForm: EventForm) => () => {
    if (state.calendarId && state.openCalendar) {
      setState((prev) => ({
        ...prev,
        eventForm,
        openCalendar: false,
      }));
    }
  };

  const clearGoogleSession = () => {
    localStorage.removeItem('TerraIoT-Google-Session');
    setState((prev) => ({
      ...prev,
      googleSession: null,
    }));
  };

  const setGoogleSession = (credentials: GoogleSession) => {
    if (credentials) {
      localStorage.setItem(
        'TerraIoT-Google-Session',
        JSON.stringify(credentials)
      );
      setState((prev) => ({
        ...prev,
        googleSession: credentials,
      }));
    }
  };

  const handleSelectEvent = (event: Event) => {
    setState((prev) => ({
      ...prev,
      selectedEvent: event,
    }));
  };

  const handleCloseDeleteEventModal = () => {
    setState((prev) => ({
      ...prev,
      selectedEvent: null,
    }));
  };

  const handleDeleteEvent = async () => {
    try {
      const deleteEventId = state.selectedEvent.id;
      await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${state.calendarId}/events/${deleteEventId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + state.googleSession.access_token,
          },
        }
      );

      setState((prev) => {
        let events = [...prev.events];
        events = events.filter((event) => event.id !== deleteEventId);
        return {
          ...prev,
          events,
          selectedEvent: null,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleCalendarContext.Provider
      value={{
        selectedEvent: state.selectedEvent,
        eventForm: state.eventForm,
        handleSelectEvent,
        handleDeleteEvent,
        handleCloseDeleteEventModal,
        calendarId: state.calendarId,
        openCalendar: state.openCalendar,
        displayEvents,
        displayEventForm,
        handleOnChange,
        googleSession: state.googleSession,
        setGoogleSession,
        events: state.events,
        handleAddNewEvent,
        hideEventForm,
        clearGoogleSession,
      }}
    >
      {children}
    </GoogleCalendarContext.Provider>
  );
};

export const useGoogleCalendarContext = () => useContext(GoogleCalendarContext);
