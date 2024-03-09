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
  EventMarker,
  ScatterChart,
} from 'react-timeseries-charts';
import { tokens } from '../theme';

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

const baselineStyleExtraLite = {
  line: {
    stroke: '#fff',
    strokeWidth: 1,
    opacity: 0.2,
    strokeDasharray: '1,1',
  },
  label: {
    fill: '#fff',
  },
};
const NullMarker = (props) => {
  return <g />;
};

const HumidityChar = ({ series, height = '150', label }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [timerange, setTimeRange] = useState(series.range());
  const [track, setTrack] = useState({
    tracker: null,
    trackerValue: '--',
    trackerEvent: null,
  });
  const croppedSeries = series.crop(timerange);

  const handleTimeRange = (timerange) => {
    setTimeRange(timerange);
  };

  const handleTrackerChanged = (t) => {
    if (t) {
      const e = series.atTime(t);
      const eventTime = new Date(
        e.begin().getTime() + (e.end().getTime() - e.begin().getTime()) / 2
      );
      const eventValue = e.get('value').toFixed(2);
      const v = `${eventValue > 0 ? '+' : ''}${eventValue}`;
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
        axis="humidity"
        event={track.trackerEvent}
        column="value"
        info={[{ label: 'Humidity', value: track.trackerValue }]}
        stemStyle={{
          stroke: 'white',
        }}
        infoStyle={{
          label: {
            fill: 'white',
            pointerEvents: 'none',
          },
          box: {
            fill: colors.greenAccent[700],
          },
        }}
        infoTimeFormat="%Y"
        infoWidth={100}
        markerRadius={2}
        markerStyle={{
          fill: 'white',
        }}
      />
    );
  };

  return (
    <Resizable>
      <ChartContainer
        showGrid={false}
        enablePanZoom
        title="Humidity"
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
            id="humidity"
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
            <LineChart axis="humidity" series={series} style={style} />
            <Baseline
              axis="humidity"
              style={baselineStyleLite}
              value={series.max()}
              label="Max"
              position="right"
            />
            <Baseline
              axis="humidity"
              style={baselineStyleLite}
              value={series.min()}
              label="Min"
              position="right"
            />
            <Baseline
              axis="humidity"
              style={baselineStyleExtraLite}
              value={series.avg() - series.stdev()}
            />
            <Baseline
              axis="humidity"
              style={baselineStyleExtraLite}
              value={series.avg() + series.stdev()}
            />
            <Baseline
              axis="humidity"
              style={baselineStyle}
              value={series.avg()}
              label="Avg"
              position="right"
            />
            <ScatterChart axis="humidity" series={series} columns={['value']} />
            {renderMarker()}
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default HumidityChar;
