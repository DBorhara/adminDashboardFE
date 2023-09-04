import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({
  title,
  data,
  dataKey,
  grid,
}: {
  title: string;
  data: any;
  dataKey: string;
  grid: boolean;
}) {
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
}
