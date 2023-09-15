import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

interface SalesData {
  currMonth: number;
  priorMonth: number;
}

const FeaturedInfo: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesData>({
    currMonth: 0,
    priorMonth: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getSalesData() {
      const { data }: AxiosResponse<SalesData> = await axios.get(
        "http://localhost:8080/api/mps/currentMonthComparison"
      );
      setSalesData(data);
      setIsLoading(false);
    }
    getSalesData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex-4">
        <Loading />
      </div>
    );
  }

  const percentageChange =
    ((salesData.currMonth - salesData.priorMonth) / salesData.priorMonth) * 100;

  return (
    <div className="w-full flex justify-between">
      <div className="flex-1 mx-5 my-0 p-[30px] rounded-lg cursor-pointer shadow-featuredInfoBoxShadow">
        <span className="text-lg">Revenue</span>
        <div className="mx-0 my-[10px] flex items-center">
          <span className="text-3xl font-semibold">$3,000</span>
          <span className="flex items-center ml-5">
            -11.4
            <ArrowDownward className="text-red-600" />
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
      <div className="flex-1 mx-5 my-0 p-[30px] rounded-lg cursor-pointer shadow-featuredInfoBoxShadow">
        <span className="text-lg">Sales</span>
        <div className="mx-0 my-[10px] flex items-center">
          <span className="text-3xl font-semibold">${salesData.currMonth}</span>
          <span className="flex items-center ml-5">
            {percentageChange.toFixed(2)}
            {percentageChange >= 0 ? (
              <ArrowUpward className="text-green-600" />
            ) : (
              <ArrowDownward className="text-red-600" />
            )}
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
      <div className="flex-1 mx-5 my-0 p-[30px] rounded-lg cursor-pointer shadow-featuredInfoBoxShadow">
        <span className="text-lg">Cost</span>
        <div className="mx-0 my-[10px] flex items-center">
          <span className="text-3xl font-semibold">$4,200</span>
          <span className="flex items-center ml-5">
            +6.4
            <ArrowUpward className="text-green-600" />
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
