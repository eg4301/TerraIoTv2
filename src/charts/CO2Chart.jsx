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

const CO2Chart = ({ series }) => {
  return (
    <Resizable>
      <ChartContainer
        title="CO2"
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
        timeRange={series.range()}
        format="%b '%y"
        timeAxisTickCount={5}
      >
        <ChartRow height="150">
          <YAxis
            id="co2"
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
            min={series.min()}
            max={series.max()}
            width="60"
            format=",.2f"
          />
          <Charts>
            <LineChart axis="co2" series={series} style={style} />
            <Baseline
              axis="co2"
              style={baselineStyleLite}
              value={series.max()}
              label="Max"
              position="right"
            />
            <Baseline
              axis="co2"
              style={baselineStyleLite}
              value={series.min()}
              label="Min"
              position="right"
            />
            <Baseline
              axis="co2"
              style={baselineStyleExtraLite}
              value={series.avg() - series.stdev()}
            />
            <Baseline
              axis="co2"
              style={baselineStyleExtraLite}
              value={series.avg() + series.stdev()}
            />
            <Baseline
              axis="co2"
              style={baselineStyle}
              value={series.avg()}
              label="Avg"
              position="right"
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default CO2Chart;
