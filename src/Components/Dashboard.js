import PieChartDesign from "./PieChart";
import ChartData from "./LineChart";
import UsersTable from "./UsersTable";
import NewBooks from "./NewBooks";
import { Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

export function Dashboard() {
  return (
    <div>
      <Fade left>
        <div className="d-flex flex-column justify-content-center">
          <Typography variant="h2" color={"inherit"}>
            Welcome to User Dashboard
          </Typography>
          <Typography variant="overline">Admin Dashboard </Typography>
        </div>
      </Fade>
      <br />
      <div className="d-flex flex-row justify-content-center align-items-center"></div>
      <Fade right>
        <div className="d-flex flex-row justify-content-center align-items-center gap-5">
          <ChartData />
          <PieChartDesign />
        </div>
      </Fade>
      <Fade bottom>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="userstable">
            <UsersTable />
          </div>
          <NewBooks />
        </div>
      </Fade>
    </div>
  );
}
