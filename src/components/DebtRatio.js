import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import data from "../data";

const formatData = (data) => {
  return data.toFixed(2) + " %";
};
const myData = data.map(item => ({ ...item, debtRatio: item.totalLiabilities * 100 / item.totalAssets }))

export function DebtRatio() {
  return (
    <LineChart width={1000} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" type="category" allowDuplicatedCategory={false} />
      <YAxis dataKey="debtRatio" />
      <Tooltip formatter={formatData} />
      <Legend />
      <Line dataKey="debtRatio" formatData={formatData} data={myData} name='Debt Ratio' />
    </LineChart>
  );
}



