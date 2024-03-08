import React, { useContext, useState } from 'react';

type GoogleCalendarContextValueType = {
  apiKey: string;
  calendarId: string;
  display: boolean;
  displayEvents: () => void;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GoogleCalendarContext =
  React.createContext<GoogleCalendarContextValueType>({
    apiKey: '',
    calendarId: '',
    display: false,
    displayEvents: () => {},
    handleOnChange: () => {},
  });

export const GoogleCalendarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState({
    apiKey: '',
    calendarId: '',
    display: false,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const displayEvents = () => {
    if (state.calendarId && state.apiKey) {
      setState((prev) => ({
        ...prev,
        display: true,
      }));
    }
  };

  return (
    <GoogleCalendarContext.Provider
      value={{
        apiKey: state.apiKey,
        calendarId: state.calendarId,
        display: state.display,
        displayEvents,
        handleOnChange,
      }}
    >
      {children}
    </GoogleCalendarContext.Provider>
  );
};

export const useGoogleCalendarContext = () => useContext(GoogleCalendarContext);
