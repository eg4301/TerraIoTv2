import { useEffect, useState } from 'react';
import { sensorService } from '../../../shared/services/sensor.service';

export const useFetchSensorData = () => {
  const [mac1Records, setMac1Records] = useState([]);
  const [mac2Records, setMac2Records] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const atmTemperatureSeries =
    sensorService.generateAtmTemperatureSeries(mac2Records);
  const co2Series = sensorService.generateCO2Series(mac2Records);
  const o2Series = sensorService.generateO2Series(mac2Records);
  const humiditySeries = sensorService.generateHumiditySeries(mac2Records);
  const waterSeries = sensorService.generateWaterSeries(mac1Records);
  const conductivitySeries =
    sensorService.generateConductivitySeries(mac1Records);
  const pHSeries = sensorService.generatePHSeries(mac1Records);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      sensorService.getRACMAC1Sensors(),
      sensorService.getRACMAC2Sensors(),
    ])
      .then((res) => {
        const [mac1Records, mac2Records] = res;
        setMac1Records(mac1Records);
        setMac2Records(mac2Records);
      })
      .catch((error) => {
        const errMsg = error?.message || 'Something went wrong!';
        console.error(error);
        setError(errMsg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    mac1Records,
    mac2Records,
    error,
    atmTemperatureSeries,
    co2Series,
    o2Series,
    humiditySeries,
    waterSeries,
    conductivitySeries,
    pHSeries,
  };
};
