import { useEffect, useState } from 'react';
import { sensorService } from '../../../shared/services/sensor.service';

export const useFetchSensorData = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const atmTemperatureSeries =
    sensorService.generateAtmTemperatureSeries(records);
  const co2Series = sensorService.generateCO2Series(records);
  const o2Series = sensorService.generateO2Series(records);
  const humiditySeries = sensorService.generateHumiditySeries(records);
  const waterSeries = sensorService.generateWaterSeries(records);
  const conductivitySeries = sensorService.generateConductivitySeries(records);
  const pHSeries = sensorService.generatePHSeries(records);

  useEffect(() => {
    setLoading(true);
    sensorService
      .getSensorsData()
      .then((data) => {
        setRecords(data);
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
    records,
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
