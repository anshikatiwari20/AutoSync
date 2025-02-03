import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from 'recharts';

// import css file
import './chart.scss';

/* The `data` array is used to store the data points for the chart. Each object in the array represents
a data point and has two properties: `name` and `total`. */
// Place your own data here
const data = [
    {
        name: 'January',
        total: 750,
    },
    {
        name: 'February',
        total: 1500,
    },
    {
        name: 'March',
        total: 1300,
    },
    {
        name: 'April',
        total: 1150,
    },
    {
        name: 'May',
        total: 800,
    },
    {
        name: 'June',
        total: 950,
    },
    {
        name: 'July',
        total: 1300,
    },
    {
        name: 'August',
        total: 1000,
    },
    {
        name: 'September',
        total: 700,
    },
    {
        name: 'October',
        total: 950,
    },
    {
        name: 'November',
        total: 1210,
    },
    {
        name: 'December',
        total: 1280,
    },
];

function Chart({ height, title }) {
    return (
        <div className="chart_sec">
            <div>
                <div className="title">
                    <p>{title} (Last 1 year)</p>
                </div>

                <div style={{ width: '100%', height: 300 }}>
                    {/* <ResponsiveContainer> */}
                    <AreaChart
                        width={800}
                        height={height}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="totals" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1a6c36" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#1a6c36" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="gray" />
                        <CartesianGrid strokeDasharray="3 3" className="strokee" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="total"
                            stroke="#1a6c36"
                            fillOpacity={1}
                            fill="url(#totals)"
                        />
                    </AreaChart>
                    {/* </ResponsiveContainer> */}
                </div>
            </div>
        </div>
    );
}

export default Chart;
