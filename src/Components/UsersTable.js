import {
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { useState, useEffect } from "react";

function UsersTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=15", { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        setUsers(result.users);
      });
  }, []);
  
  return (
    <div className="col">
      <Tooltip title="users-table">
        <Paper sx={{ width: "100%", overflow: "hidden", padding: "20" }}>
          <TableContainer sx={{ maxHeight: 220 }}>
            <Table size="small" padding="checkbox">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={6}>
                    New Members
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  {[
                    "Sl.no.",
                    "Name",
                    "Gender",
                    "Age",
                    "No. of Books Issued",
                    "View Detail",
                  ].map((element, index) => {
                    return <TableCell key={index}>{element}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((element, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{element.id}</TableCell>
                      <TableCell>
                        <Tooltip title={element.firstName} placement="top-start">
                          <Avatar
                            alt={element.firstName}
                            src={element.image}
                            variant="circular"
                          ></Avatar>
                        </Tooltip>
                      </TableCell>
                      <TableCell>{element.firstName}</TableCell>
                      <TableCell>{element.age}</TableCell>
                      <TableCell align="center">2</TableCell>
                      <TableCell align="center">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Tooltip>
    </div>
  );
}

export default UsersTable;
