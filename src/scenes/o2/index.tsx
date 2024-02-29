// @ts-nocheck
import { Box, CircularProgress, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { useFetchSensorData } from '../dashboard/hooks/useFetchSensorData';
import { tokens } from '../../theme';
import O2Chart from '../../charts/O2Chart';

const O2 = () => {
  const { loading, o2Series } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (loading || !o2Series) {
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
      <Header title="O2" subtitle="Ambient Parameter" />
      <Box height="75vh">
        <Box backgroundColor={colors.primary[450]}>
          <O2Chart series={o2Series} height="300" label="O2" />
        </Box>
      </Box>
    </Box>
  );
};

export default O2;
