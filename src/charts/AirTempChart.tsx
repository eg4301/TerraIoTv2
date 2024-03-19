// @ts-nocheck

import { useTheme } from '@mui/material';
import { useState } from 'react';
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  Baseline,
  Resizable,
  ScatterChart,
  EventMarker,
} from 'react-timeseries-charts';
import { tokens } from '../theme';
import { format } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { GraphTypeEnum } from '../shared/enums/graph-type.enum';

const style = {
  value: {
    stroke: '#fff',
    opacity: 0.2,
  },
};

const baselineStyle = {
  line: {
    stroke: '#fff',
    strokeWidth: 1,
    opacity: 0.4,
    strokeDasharray: 'none',
  },
  label: {
    fill: '#fff',
  },
};

const baselineStyleLite = {
  line: {
    stroke: '#fff',
    strokeWidth: 1,
    opacity: 0.5,
  },
  label: {
    fill: '#fff',
  },
};

// const baselineStyleExtraLite = {
//   line: {
//     stroke: '#fff',
//     strokeWidth: 1,
//     opacity: 0.2,
//     strokeDasharray: '1,1',
//   },
//   label: {
//     fill: '#fff',
//   },
// };

const NullMarker = (props) => {
  return <g />;
};

const AirTempChart = ({ atmTemperatureSeries, height = '150', label }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [timerange, setTimeRange] = useState(atmTemperatureSeries.range());
  const [track, setTrack] = useState({
    tracker: null,
    trackerValue: '-- °C',
    trackerEvent: null,
  });
  const croppedSeries = atmTemperatureSeries.crop(timerange);
  const [searcParams] = useSearchParams();
  const graph = searcParams.get('graph') || GraphTypeEnum.SCATTER_LINE;

  const handleTimeRange = (timerange) => {
    setTimeRange(timerange);
  };

  const handleTrackerChanged = (t) => {
    if (t) {
      const e = atmTemperatureSeries.atTime(t);
      const eventTime = new Date(
        e.begin().getTime() + (e.end().getTime() - e.begin().getTime()) / 2
      );
      const eventValue = e.get('value').toFixed(2);
      const v = `${eventValue > 0 ? '+' : ''}${eventValue}°C`;
      setTrack({ tracker: eventTime, trackerValue: v, trackerEvent: e });
    } else {
      setTrack({ tracker: null, trackerValue: null, trackerEvent: null });
    }
  };

  const renderMarker = () => {
    if (!track.tracker) {
      return <NullMarker />;
    }

    return (
      <EventMarker
        type="flag"
        axis="airTemperature"
        event={track.trackerEvent}
        column="value"
        info={[{ label: 'Temperature', value: track.trackerValue }]}
        stemStyle={{
          stroke: 'white',
        }}
        infoStyle={{
          label: {
            fill: 'white',
            pointerEvents: 'none',
          },
          box: {
            fill: colors.grey[600],
          },
        }}
        infoTimeFormat={(date) => format(date, 'MMM dd HH:mm')}
        infoWidth={135}
        markerRadius={2}
        markerStyle={{
          fill: 'white',
        }}
      />
    );
  };

  const renderGraphType = () => {
    if ([GraphTypeEnum.LINE].includes(graph)) {
      return [
        <LineChart
          axis="airTemperature"
          series={atmTemperatureSeries}
          style={style}
        />,
      ];
    }

    if ([GraphTypeEnum.SCATTER].includes(graph)) {
      return [
        <ScatterChart
          axis="airTemperature"
          series={atmTemperatureSeries}
          columns={['value']}
        />,
      ];
    }

    if ([GraphTypeEnum.SCATTER_LINE].includes(graph)) {
      return [
        <LineChart
          axis="airTemperature"
          series={atmTemperatureSeries}
          style={style}
        />,
        <ScatterChart
          axis="airTemperature"
          series={atmTemperatureSeries}
          columns={['value']}
        />,
      ];
    }
  };

  return (
    <Resizable>
      <ChartContainer
        showGrid={false}
        enablePanZoom
        title="Air Temperature (°C)"
        titleStyle={{ fill: '#fff', fontWeight: 500 }}
        timeAxisStyle={{
          axis: {
            fill: 'none',
            stroke: '#fff',
            pointerEvents: 'none',
          },
          values: {
            fill: '#fff',
            fontWeight: 400,
          },
        }}
        onTimeRangeChanged={handleTimeRange}
        onTrackerChanged={handleTrackerChanged}
        timeRange={timerange}
        // format="%b '%y"
        timeAxisTickCount={5}
      >
        <ChartRow height={height}>
          <YAxis
            id="airTemperature"
            label={label}
            style={{
              values: {
                fill: '#fff',
              },
              label: {
                fill: '#fff',
                transform: 'translateY(50px) rotate(-90deg)',
              },
              axis: {
                fill: 'none',
                stroke: '#fff',
              },
              ticks: {
                fill: 'none',
                stroke: '#fff',
              },
            }}
            min={croppedSeries.min()}
            max={croppedSeries.max()}
            width="60"
            format=",.2f"
          />
          <Charts>
            {renderGraphType()}
            <Baseline
              axis="airTemperature"
              style={baselineStyleLite}
              value={croppedSeries.max()}
              label="Max"
              position="right"
            />
            <Baseline
              axis="airTemperature"
              style={baselineStyleLite}
              value={croppedSeries.min()}
              label="Min"
              position="right"
            />
            <Baseline
              axis="airTemperature"
              style={baselineStyle}
              value={croppedSeries.avg()}
              label="Avg"
              position="right"
            />
            {renderMarker()}
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default AirTempChart;
