import { Box } from '@mui/material';
import Header from '../../components/Header';
import WaterTempChart from '../../charts/WaterTempChart';

const Water_temp = () => {
  return (
    <Box m="20px">
      <Header title="Water Temperature" subtitle="Water Parameter" />
      <Box height="75vh">
        <WaterTempChart />
      </Box>
    </Box>
  );
};

export default Water_temp;
