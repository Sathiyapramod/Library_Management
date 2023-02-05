import React from "react";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import { newBooklist } from "./general";

function NewBooks() {
  return (
    <div className="newbooks">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 220 }}>
          <Table size="small">
            <TableHead>
              <TableRow hover>
                {["Sl.no.", "Name of Book", "Rating", "Action"].map(
                  (element, index) => {
                    return <TableCell key={index}>{element}</TableCell>;
                  }
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {newBooklist.map((element, index) => {
                return (
                  <TableRow key={index} hover>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{element.name}</TableCell>
                    <TableCell>{element.rating}</TableCell>
                    <TableCell>
                      <Button>View</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default NewBooks;
