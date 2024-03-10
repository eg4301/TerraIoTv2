import './App.css';
import { Amplify } from 'aws-amplify';
import { Routes, Route, useNavigate } from 'react-router-dom';
import config from './amplifyconfiguration.json';
import { ColorModeContext, useMode } from './theme';
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  ThemeProvider,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Dashboard from './scenes/dashboard';
import AirTemp from './scenes/air_temp';
import CO2 from './scenes/co2';
import O2 from './scenes/o2';
import Humidity from './scenes/humidity';
import WaterTemp from './scenes/water_temp';
import Conductivity from './scenes/conductivity';
import Calendar from './scenes/calendar';
import PhChartPage from './scenes/ph';
import GoogleCalendar from './scenes/google_calendar';
import ActuationMinMax from './scenes/actuation-min-max';
import { UserProfile } from './scenes/profile';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { getUrl } from 'aws-amplify/storage';
import { GoogleCalendarProvider } from './context/GoogleCalendarProvider';

Amplify.configure(config);

function App({ signOut, user }) {
  const [avatarSrc, setAvatarSrc] = useState('');

  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [clicked, setClicked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getUserAttributes = async () => {
      const attributes = await fetchUserAttributes();
      if (attributes.picture) {
        const url = await getUrl({
          key: attributes.picture,
          options: {
            expiresIn: 3600,
          },
        });
        setAvatarSrc(url.url.toString());
      }
    };
    getUserAttributes();
  }, []);

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              {/* <Tooltip
                title="Notifications"
                style={{ position: 'absolute', top: '27px', right: '210px' }}
                arrow
              >
                <IconButton onClick={() => setClicked((prev) => !prev)}>
                  {clicked ? (
                    <NotificationsOffOutlinedIcon />
                  ) : (
                    <NotificationsOutlinedIcon />
                  )}
                </IconButton>
              </Tooltip> */}

              <React.Fragment>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '15px',
                      }}
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <img
                        alt="profile-user"
                        width="40px"
                        height="40px"
                        src={avatarSrc || `../../assets/Avatar.png`}
                        style={{ cursor: 'pointer', borderRadius: '50%' }}
                      />
                      <Box width="110px">
                        <Typography variant="h4">
                          Hi, {user.username.toUpperCase()}
                        </Typography>
                      </Box>
                      <ArrowDropDownIcon />
                    </IconButton>
                  </Tooltip>
                </Box>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <Paper sx={{ width: 150, maxWidth: '100%' }}>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate('/user-profile');
                      }}
                    >
                      <Avatar /> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={signOut}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Paper>
                </Menu>
              </React.Fragment>
              <GoogleCalendarProvider>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/air_temp" element={<AirTemp />} />
                  <Route path="/co2" element={<CO2 />} />
                  <Route path="/o2" element={<O2 />} />
                  <Route path="/humidity" element={<Humidity />} />
                  <Route path="/water_temp" element={<WaterTemp />} />
                  <Route path="/conductivity" element={<Conductivity />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/pH" element={<PhChartPage />} />
                  <Route path="/google_calendar" element={<GoogleCalendar />} />
                  <Route path="/user-profile" element={<UserProfile />} />
                  <Route path="/actuation" element={<ActuationMinMax />} />
                </Routes>
              </GoogleCalendarProvider>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default withAuthenticator(App);
