import React from "react";
import { Paper } from "@mui/material";
import { Pie, PieChart, Tooltip } from "recharts";
const data01 = [
  {
    name: "Group A",
    value: 320,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 250,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 289,
  },
  {
    name: "Group F",
    value: 140,
  },
];

function PieChartDesign() {
  return (
    <div className="shadow">
      <Paper sx={{ padding: 2 }}>
        <PieChart width={450} height={300}>
          <Pie
            dataKey="value"
            data={data01}
            nameKey="name"
            outerRadius={80}
            innerRadius={60}
            cx="50%"
            cy="50%"
            fill="#8884d8"
            label
          />
          <Tooltip title />
        </PieChart>
      </Paper>
    </div>
  );
}

export default PieChartDesign;
