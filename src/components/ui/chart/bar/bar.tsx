import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { TBarChart } from "./bar.types";

const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;

  const image = payload?.value;

  return (
    <g transform={`translate(${x},${y})`}>
      {image && (
        <foreignObject x="-40" y="-20" width="40" height="40">
          <img
            src={image}
            alt="Character"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </foreignObject>
      )}
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { name, quantity } = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>{name}</strong>
        </p>
        <p style={{ margin: 0 }}>Quadrinhos: {quantity}</p>
      </div>
    );
  }
  return null;
};

const BarChart = ({ data }: TBarChart) => {
  return (
    <ResponsiveContainer width="100%" height={1000}>
      <Chart
        data={data}
        layout="vertical"
        margin={{ top: 30, right: 30, left: 100, bottom: 30 }}
      >
        <XAxis type="number" />
        <YAxis
          dataKey="image"
          type="category"
          tick={<CustomYAxisTick />}
          interval={0}
          width={10}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="quantity" fill="#ff232a" />
      </Chart>
    </ResponsiveContainer>
  );
};

export default BarChart;
