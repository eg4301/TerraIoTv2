import { Box } from '@mui/material';
import Header from '../../components/Header';
import HumidityChart from '../../charts/HumidityChart';

const Humidity = () => {
  return (
    <Box m="20px">
      <Header title="Humidity" subtitle="Ambient Parameter" />
      <Box height="75vh">
        <HumidityChart />
      </Box>
    </Box>
  );
};

export default Humidity;
