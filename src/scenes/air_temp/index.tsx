import { Box } from '@mui/material';
import Header from '../../components/Header';
// import AirTempChart from '../../charts/AirTempChart';

const Air_temp = () => {
  return (
    <Box m="20px">
      <Header title="Air Temperature" subtitle="Ambient Parameter" />
      <Box height="75vh">{/* <AirTempChart /> */}</Box>
    </Box>
  );
};

export default Air_temp;
