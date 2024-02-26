import { Box, CircularProgress, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { useFetchSensorData } from '../dashboard/hooks/useFetchSensorData';
import { tokens } from '../../theme';
import CO2Chart from '../../charts/CO2Chart';

const CO2 = () => {
  const { loading, co2Series } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (loading || !co2Series) {
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
      <Header title="CO2" subtitle="Ambient Parameter" />
      <Box height="75vh">
        <CO2Chart series={co2Series} height="200" />
      </Box>
    </Box>
  );
};

export default CO2;
