// @ts-nocheck

import { Box, CircularProgress, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { useFetchSensorData } from '../dashboard/hooks/useFetchSensorData';
import WaterTempChart from '../../charts/WaterTempChart';
import { tokens } from '../../theme';

const Water_temp = () => {
  const { loading, waterSeries } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (loading || !waterSeries) {
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
      <Header title="Water Temperature" subtitle="Water Parameter" />
      <Box height="75vh">
        <Box backgroundColor={colors.primary[450]}>
          <WaterTempChart series={waterSeries} height="300" />
        </Box>
      </Box>
    </Box>
  );
};

export default Water_temp;
