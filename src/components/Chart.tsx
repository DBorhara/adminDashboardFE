import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface IDataPoint {
  month: string;
  [key: string]: number | string;
}

interface ChartProps {
  isLoading: boolean;
  title: string;
  data: IDataPoint[];
  dataKey: string;
  grid: boolean;
}

const Chart: React.FC<ChartProps> = ({ title, data, dataKey, grid }) => {
  return (
    <div className="m-5 p-5 shadow-featuredInfoBoxShadow">
      <h3 className="mb-5">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="blue" />
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#ECECEC" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
