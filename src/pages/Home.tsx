import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userData } from "../dummydata";

export default function Home() {
  return (
    <div className="flex-4">
      <FeaturedInfo />
      <Chart
        data={userData}
        title={`User Analytics`}
        grid
        dataKey={`Active Users`}
      />
      <div className="flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
