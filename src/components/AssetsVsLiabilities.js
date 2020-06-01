import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import data from "../data";

const formatData = (data) => {
  return (data / 1000000).toFixed(0) + " m";
};

export function AssetsVsLiabilities() {
  return (
    <div>
      <span className="TSLA">TSLA Balance Charts</span>
      <div style={{ width: "1000px" }}>
        <LineChart
          width={1000}
          height={1000}
          data={data}
          margin={{
            top: 50, right: 30, left: 20, bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatData} />
          <Tooltip formatter={data => data.toLocaleString('US-en')} />
          <Legend />
          <Line type="monotone" dataKey="totalAssets" stroke="#2BB48E" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="totalLiabilities" stroke="#337D9C" />
        </LineChart>
      </div>
    </div>
  );
}

