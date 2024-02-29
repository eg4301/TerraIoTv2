import { RACSensors } from '../../API';
import { listRACSensors } from '../../graphql/queries';
import { execute } from '../utils/api';
import { TimeSeries } from 'pondjs';

class SernsorService {
  async getSensorsData() {
    const response1 = await execute(
      {
        statement: listRACSensors,
        name: 'listRACSensors',
      },
      { MAC: 1, limit: 1000, sortDirection: 'DESC' }
    );
    const response2 = await execute(
      {
        statement: listRACSensors,
        name: 'listRACSensors',
      },
      { MAC: 2, limit: 1000, sortDirection: 'DESC' }
    );

    let items = [];

    if (response1.items?.length) {
      items.push(...response1.items);
    }
    if (response2.items?.length) {
      items.push(...response2.items);
    }

    return items.sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }

  generateAtmTemperatureSeries(data: RACSensors[]) {
    if (data?.length) {
      const points = data.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.atm_temperature,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_Atm_Temperature',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateCO2Series(data: RACSensors[]) {
    if (data?.length) {
      const points = data.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.CO2,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_CO2',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateO2Series(data: RACSensors[]) {
    if (data?.length) {
      const points = data.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.O2,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_CO2',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateHumiditySeries(data: RACSensors[]) {
    if (data?.length) {
      const points = data.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.humidity,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_Humidity',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateWaterSeries(data: RACSensors[]) {
    if (data?.length) {
      const points = data.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.temperature,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_Water',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateConductivitySeries(data: RACSensors[]) {
    if (data?.length) {
      const points = data.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.conductivity,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_Conductivity',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generatePHSeries(data: RACSensors[]) {
    if (data?.length) {
      const points = data.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.pH,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_PH',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
}

export const sensorService = new SernsorService();
