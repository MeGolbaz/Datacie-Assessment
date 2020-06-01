import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'DebtRatio',
    data: [
      { category: '2016', value: '1.35' },
      { category: '2017', value: '1.24' },
      { category: '2018', value: '1.27' },
      { category: '2019', value: '1.30' },

    ],
  },
];


export function DebtRatio () {
  return(
    
  <LineChart width={1000} height={300}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
    <YAxis dataKey="value" />
    <Tooltip />
    <Legend />
    {data.map(s => (
      <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
    ))}
  </LineChart>
        );
      }
    
    

