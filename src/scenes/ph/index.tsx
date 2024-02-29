// @ts-nocheck

import { Box, CircularProgress, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { useFetchSensorData } from '../dashboard/hooks/useFetchSensorData';
import PHChart from '../../charts/PHChart';
import { tokens } from '../../theme';

const PhChartPage = () => {
  const { loading, pHSeries } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (loading || !pHSeries) {
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
      <Header title="PH" subtitle="PH Parameter" />
      <Box height="75vh">
        <Box backgroundColor={colors.primary[450]}>
          <PHChart series={pHSeries} height="300" label="PH" />
        </Box>
      </Box>
    </Box>
  );
};

export default PhChartPage;
