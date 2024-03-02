import React, { useCallback, useEffect, useRef, useState } from 'react';
import { sensorService } from '../../../shared/services';

export const useActuationMin = () => {
  const isDirectyRef = useRef(false);
  const [loading, setIsLoading] = useState(false);
  const [actuations, setActuations] = useState([]);
  const [state, setState] = useState({
    CO2: undefined,
    O2: undefined,
    atm_temperature: undefined,
    conductivity: undefined,
    humidity: undefined,
    pH: undefined,
    temperature: undefined,
  });

  const fetchRecords = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await sensorService.getActuationMinData();
      setActuations(data);
      for (let actuation of data) {
        setState((prev) => ({
          ...prev,
          [actuation.Variable]: actuation.Min,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    isDirectyRef.current = true;
  };

  const handleSaveChanges = async () => {
    if (!isDirectyRef.current) {
      return;
    }
    const promises = [];
    for (let key in state) {
      const actuation = actuations.find(
        (actuation) => actuation.Variable === key
      );
      promises.push(
        sensorService.updateActuationMinRecord({
          Setup: actuation.Setup,
          Variable: actuation.Variable,
          Min: state[key] as number,
        })
      );
    }

    await Promise.all(promises);
    await fetchRecords();
    isDirectyRef.current = false;
  };

  return {
    actuations,
    loading,
    formState: state,
    handleChange,
    handleSaveChanges,
  };
};
