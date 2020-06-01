import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import data from "../data";

const formatData = (data) => {
  return (data / 1000000).toFixed(0) + " m";
};

export function TotalAssets() {
  return (
   <div>
      <BarChart
      width={1000}
      height={1000}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 50,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis tickFormatter={formatData} />
      <Tooltip />
      <Legend />
      <Bar dataKey="totalAssets" fill="#2BB48E" />
      <Bar dataKey="totalLiabilities" fill="#337D9C" />
    </BarChart>
    </div>
  );
}
