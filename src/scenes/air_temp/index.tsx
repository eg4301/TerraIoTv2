// @ts-nocheck

import { Box, CircularProgress, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { useFetchSensorData } from '../dashboard/hooks/useFetchSensorData';
import AirTempChart from '../../charts/AirTempChart';
import { tokens } from '../../theme';

const Air_temp = () => {
  const { loading, atmTemperatureSeries } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (loading || !atmTemperatureSeries) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          color: colors.greenAccent[500],
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }
  return (
    <Box m="20px">
      <Header title="Air Temperature" subtitle="Ambient Parameter" />
      <Box height="75vh">
        <Box backgroundColor={colors.primary[450]}>
          <AirTempChart
            atmTemperatureSeries={atmTemperatureSeries}
            height="300"
            label="Air Temperature"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Air_temp;
