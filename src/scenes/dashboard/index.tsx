// @ts-nocheck

import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import AirTempChart from '../../charts/AirTempChart';
import CO2_Chart from '../../charts/CO2_Chart';
import O2_Chart from '../../charts/O2_Chart';
import HumidityChart from '../../charts/HumidityChart';
import WaterTempChart from '../../charts/WaterTempChart';
import ConductivityChart from '../../charts/ConductivityChart';
// import { useFetchSensorData } from './hooks/useFetchSensorData';

const Dashboard = () => {
  //   const { loading, records } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Air Temperature
              </Typography>
              <Typography
                variant="h5"
                // fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Ambient Data
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <AirTempChart isDashboard={true} />
          </Box>
        </Box>
        {/* 

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                CO2
              </Typography>
              <Typography
                variant="h5"
                // fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Ambient Data
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <CO2_Chart isDashboard={true} />
          </Box>
        </Box>
        {/* 

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                O2
              </Typography>
              <Typography
                variant="h5"
                // fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Ambient Data
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <O2_Chart isDashboard={true} />
          </Box>
        </Box>
        {/* 

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Humidity
              </Typography>
              <Typography
                variant="h5"
                // fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Ambient Data
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <HumidityChart isDashboard={true} />
          </Box>
        </Box>
        {/* 

        {/* ROW 4 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Water Temperature
              </Typography>
              <Typography
                variant="h5"
                // fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Water Data
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <WaterTempChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 4 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Conductivity
              </Typography>
              <Typography
                variant="h5"
                // fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Water Data
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <ConductivityChart isDashboard={true} />
          </Box>
        </Box>
        {/* 

        {/* ROW 4 */}
        {/* <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                pH
              </Typography>
              <Typography
                variant="h5"
                // fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Water Data
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box height="250px" m="0px 0 0 0">
            <GetpHData isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
