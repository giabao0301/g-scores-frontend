"use client";
import { ResultStat } from "@/types/result";
import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

export default function BarChart({ data }: { data: ResultStat[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-500">Please select a subject</div>
    );
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <ResponsiveContainer width="100%" height={350}>
        <BarGraph
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 30 }}
        >
          <XAxis
            dataKey="range"
            tickLine={false}
            axisLine={true}
            stroke="#888888"
            fontSize={12}
            padding={{ left: 20, right: 20 }}
            tickMargin={10}
          />
          <YAxis
            tick
            tickLine={true}
            axisLine={true}
            stroke="#888888"
            fontSize={12}
            tickFormatter={(value) => value}
          />
          <Bar
            dataKey="totalStudents"
            radius={[4, 4, 0, 0]}
            barSize={window.innerWidth < 640 ? 30 : 50}
          />
        </BarGraph>
      </ResponsiveContainer>
    </div>
  );
}
