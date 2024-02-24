import { useEffect, useState } from 'react';
import { sensorService } from '../../../shared/services/sensor.service';

export const useFetchSensorData = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('jjjjjjjj');
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
  };
};
