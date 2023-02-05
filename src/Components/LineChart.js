import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Paper } from "@mui/material";

function ChartData() {
  const data = [
    { name: "User A", frequency: 3, books: 4 },
    { name: "User B", frequency: 4, books: 2 },
    { name: "User C", frequency: 2, books: 9 },
    { name: "User D", frequency: 1, books: 5 },
    { name: "User E", frequency: 2, books: 9 },
    { name: "User F", frequency: 8, books: 9 },
    { name: "User G", frequency: 0, books: 9 },
  ];
  return (
    <div className="shadow">
      <Paper sx={{ padding: 2 }}>
        <LineChart
          width={840}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="frequency" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip viewBox={{ x: 0, y: 0, width: 200, height: 200 }} />
        </LineChart>
      </Paper>
    </div>
  );
}

export default ChartData;
