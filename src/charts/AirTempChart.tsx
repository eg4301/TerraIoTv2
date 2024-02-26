// @ts-nocheck

import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  Baseline,
  Resizable,
} from 'react-timeseries-charts';

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

const AirTempChart = ({ atmTemperatureSeries }) => {
  return (
    <Resizable>
      <ChartContainer
        title="Air Temperature"
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
        timeRange={atmTemperatureSeries.range()}
        format="%b '%y"
        timeAxisTickCount={5}
      >
        <ChartRow height="150">
          <YAxis
            id="airTemperature"
            style={{
              values: {
                fill: '#fff',
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
            min={atmTemperatureSeries.min()}
            max={atmTemperatureSeries.max()}
            width="60"
            format=",.2f"
          />
          <Charts>
            <LineChart
              axis="airTemperature"
              series={atmTemperatureSeries}
              style={style}
            />
            <Baseline
              axis="airTemperature"
              style={baselineStyleLite}
              value={atmTemperatureSeries.max()}
              label="Max"
              position="right"
            />
            <Baseline
              axis="airTemperature"
              style={baselineStyleLite}
              value={atmTemperatureSeries.min()}
              label="Min"
              position="right"
            />
            <Baseline
              axis="airTemperature"
              style={baselineStyleExtraLite}
              value={atmTemperatureSeries.avg() - atmTemperatureSeries.stdev()}
            />
            <Baseline
              axis="airTemperature"
              style={baselineStyleExtraLite}
              value={atmTemperatureSeries.avg() + atmTemperatureSeries.stdev()}
            />
            <Baseline
              axis="airTemperature"
              style={baselineStyle}
              value={atmTemperatureSeries.avg()}
              label="Avg"
              position="right"
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default AirTempChart;
