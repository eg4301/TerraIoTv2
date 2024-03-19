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

const ConductivityChart = ({ series, height = '150', label }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [timerange, setTimeRange] = useState(series.range());
  const [track, setTrack] = useState({
    tracker: null,
    trackerValue: '--',
    trackerEvent: null,
  });
  const croppedSeries = series.crop(timerange);
  const [searcParams] = useSearchParams();
  const graph = searcParams.get('graph') || GraphTypeEnum.SCATTER_LINE;

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
        axis="conductivity"
        event={track.trackerEvent}
        column="value"
        info={[{ label: 'Conductivity', value: track.trackerValue }]}
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
        infoWidth={110}
        markerRadius={2}
        markerStyle={{
          fill: 'white',
        }}
      />
    );
  };

  const renderGraphType = () => {
    if ([GraphTypeEnum.LINE].includes(graph)) {
      return [<LineChart axis="conductivity" series={series} style={style} />];
    }

    if ([GraphTypeEnum.SCATTER].includes(graph)) {
      return [
        <ScatterChart
          axis="conductivity"
          series={series}
          columns={['value']}
        />,
      ];
    }

    if ([GraphTypeEnum.SCATTER_LINE].includes(graph)) {
      return [
        <LineChart axis="conductivity" series={series} style={style} />,
        <ScatterChart
          axis="conductivity"
          series={series}
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
        title="Conductivity (ms/cm)"
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
            id="conductivity"
            label={label}
            style={{
              values: {
                fill: '#fff',
              },
              axis: {
                fill: 'none',
                stroke: '#fff',
              },
              label: {
                fill: '#fff',
                transform: 'translateY(50px) rotate(-90deg)',
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
              axis="conductivity"
              style={baselineStyleLite}
              value={croppedSeries.max()}
              label="Max"
              position="right"
            />
            <Baseline
              axis="conductivity"
              style={baselineStyleLite}
              value={croppedSeries.min()}
              label="Min"
              position="right"
            />
            <Baseline
              axis="conductivity"
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

export default ConductivityChart;
