import { Box } from '@mui/material';
import Header from '../../components/Header';
import CO2_chart from '../../charts/CO2_Chart';

const CO2 = () => {
  return (
    <Box m="20px">
      <Header title="CO2" subtitle="Ambient Parameter" />
      <Box height="75vh">
        <CO2_chart />
      </Box>
    </Box>
  );
};

export default CO2;
