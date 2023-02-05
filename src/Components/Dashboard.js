import PieChartDesign from "./PieChart";
import ChartData from "./LineChart";
import UsersTable from "./UsersTable";
import NewBooks from "./NewBooks";
import { Typography } from "@mui/material";

export function Dashboard() {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center">
        <Typography variant="h2" color={"inherit"}>Welcome to User Dashboard</Typography>
        <Typography variant="overline">Admin Dashboard </Typography>
      </div>
      <br />
      <div className="d-flex flex-row justify-content-center align-items-center"></div>
      <div className="d-flex flex-row justify-content-center align-items-center gap-5">
        <ChartData />
        <PieChartDesign />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="userstable">
          <UsersTable />
        </div>
        <NewBooks />
      </div>
    </div>
  );
}
