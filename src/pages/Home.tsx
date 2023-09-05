import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";

import axios from "axios";

export default function Home() {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    async function getMonthlyUserHistory() {
      const { data } = await axios.get(
        "http://localhost:8080/api/mau/usersLastTwelveMonths"
      );

      setuserData(data);
    }
    getMonthlyUserHistory();
  }, []);
  return (
    <div className="flex-4">
      <FeaturedInfo />
      <Chart data={userData} title={`User Analytics`} grid dataKey={`count`} />
      <div className="flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
