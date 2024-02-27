// @ts-nocheck

import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import AirTempChart from '../../charts/AirTempChart';
import CO2Chart from '../../charts/CO2Chart';
import O2Chart from '../../charts/O2Chart';
import HumidityChart from '../../charts/HumidityChart';
import WaterTempChart from '../../charts/WaterTempChart';
import ConductivityChart from '../../charts/ConductivityChart';
import PHChart from '../../charts/PHChart';
import { useFetchSensorData } from './hooks/useFetchSensorData';

const Dashboard = () => {
  const {
    loading,
    atmTemperatureSeries,
    co2Series,
    o2Series,
    humiditySeries,
    waterSeries,
    conductivitySeries,
    pHSeries,
  } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (
    loading ||
    !atmTemperatureSeries ||
    !co2Series ||
    !o2Series ||
    !humiditySeries ||
    !waterSeries ||
    !conductivitySeries ||
    !pHSeries
  ) {
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
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Grid container spacing={2}>
        {/* ROW 2 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
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
            </Box>
            <Box height="250px" m="-20px 0 0 0" p="4px" width="100%">
              <AirTempChart atmTemperatureSeries={atmTemperatureSeries} />
            </Box>
          </Box>
        </Grid>
        {/* 

        {/* ROW 2 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
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
            <Box height="250px" m="-20px 0 0 0" p="4px" width="100%">
              <CO2Chart series={co2Series} />
            </Box>
          </Box>
        </Grid>
        {/* 

        {/* ROW 3 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
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
            <Box height="250px" m="-20px 0 0 0" p="4px" width="100%">
              <O2Chart series={o2Series} />
            </Box>
          </Box>
        </Grid>
        {/* 

        {/* ROW 3 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
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
              <HumidityChart series={humiditySeries} />
            </Box>
          </Box>
        </Grid>
        {/* 

        {/* ROW 4 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
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
              <WaterTempChart series={waterSeries} />
            </Box>
          </Box>
        </Grid>

        {/* ROW 4 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
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
            <Box height="250px" m="-20px 0 0 0" p="4px" width="100%">
              <ConductivityChart series={conductivitySeries} />
            </Box>
          </Box>
        </Grid>
        {/* 

        {/* ROW 4 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
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
            <Box height="250px" m="0px 0 0 0" p="4px" width="100%">
              <PHChart series={pHSeries} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
