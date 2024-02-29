// @ts-nocheck

import { Box, CircularProgress, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { useFetchSensorData } from '../dashboard/hooks/useFetchSensorData';
import ConductivityChart from '../../charts/ConductivityChart';
import { tokens } from '../../theme';

const Conductivity = () => {
  const { loading, conductivitySeries } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (loading || !conductivitySeries) {
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
      <Header title="Conductivity" subtitle="Water Parameter" />
      <Box height="75vh">
        <Box backgroundColor={colors.primary[450]}>
          <ConductivityChart
            series={conductivitySeries}
            height="300"
            label="Conductivity"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Conductivity;
