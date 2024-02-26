import { Box, CircularProgress, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { useFetchSensorData } from '../dashboard/hooks/useFetchSensorData';
import { tokens } from '../../theme';
import HumidityChart from '../../charts/HumidityChart';

const Humidity = () => {
  const { loading, humiditySeries } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (loading || !humiditySeries) {
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
      <Header title="Humidity" subtitle="Ambient Parameter" />
      <Box height="75vh">
        <HumidityChart series={humiditySeries} height="200" />{' '}
      </Box>
    </Box>
  );
};

export default Humidity;
