"use client";
import { dataForChart } from "@/lib/data";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const VisitorsStatistics = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mt-8">
      <h1 className="text-xl font-semibold mb-4">Weekly Traffic Statistics</h1>
      <div className="flex flex-col h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={600}
            height={300}
            data={dataForChart}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="8 8" />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#218544"
              fill="#218544"
              dot={{ stroke: "#218544", strokeWidth: 2 }}
              activeDot={{ r: 5 }}
              strokeWidth={3}
            />
            <XAxis dataKey="date" />
            <YAxis width="auto" dataKey="visitors" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorsStatistics;
