"use client";
import { ScoreRange } from "@/types/score";
import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

export default function BarChart({ data }: { data: ScoreRange[] }) {
  if (!data || data.length === 0) {
    return <div>Please select subject</div>;
  }
  return (
    <ResponsiveContainer width={"70%"} height={350}>
      <BarGraph data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis
          dataKey={"range"}
          tickLine={false}
          axisLine={true}
          stroke="#888888"
          fontSize={12}
          padding={{ left: 48 }}
          tickMargin={12}
        />

        <YAxis
          tick
          tickLine={true}
          axisLine={true}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => value}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} barSize={50} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
