import { Box } from '@mui/material';
import Header from '../../components/Header';
import O2_chart from '../../charts/O2_Chart';

const O2 = () => {
  return (
    <Box m="20px">
      <Header title="O2" subtitle="Ambient Parameter" />
      <Box height="75vh">
        <O2_chart />
      </Box>
    </Box>
  );
};

export default O2;
