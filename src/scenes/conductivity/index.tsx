import { Box } from '@mui/material';
import Header from '../../components/Header';
import ConductivityChart from '../../charts/ConductivityChart';

const Conductivity = () => {
  return (
    <Box m="20px">
      <Header title="Conductivity" subtitle="Water Parameter" />
      <Box height="75vh">
        <ConductivityChart />
      </Box>
    </Box>
  );
};

export default Conductivity;
