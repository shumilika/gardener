'use client';
import { dataForChart } from '@/lib/data';
import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const VisitorsStatistics = () => {
    return (
        <div className='p-6 bg-white rounded-xl shadow-md xl:col-span-2 flex items-center w-full'>
           <div className='flex flex-col h-full w-full'>
             <h1 className='text-xl font-semibold mb-4'>Visitor Statistics</h1>
            <div>
                 <AreaChart width={600} height={300} data={dataForChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="8 8" />
                   <Area type="monotone" dataKey="visitors" stroke="#218544" fill="#218544" 
                   dot={{ stroke: '#218544', strokeWidth: 2 }} activeDot={{ r: 5 }} strokeWidth={3} />
                    <XAxis dataKey="date" />
                    <YAxis width="auto" dataKey='visitors' />
                    <Tooltip />
                </AreaChart>
            </div>
           </div>
        </div>
    );
};

export default VisitorsStatistics;