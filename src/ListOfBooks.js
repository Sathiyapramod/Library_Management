import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { API } from "./Components/general";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { createContext } from "react";
import Button from "@mui/material/Button";

const Naming = createContext();

export const useGlobalContext = () => {
  return useContext(Naming);
};

export function ListOfBooks() {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const getData = () => {
    fetch(`${API}/Books/`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        setArr(result);
      });
  };
  useEffect(() => getData(), []);
  return (
    <div>
      <span className="fs-2">List of Books </span>
      <Naming.Provider value={arr}>
        <GetDetails />
      </Naming.Provider>
    </div>
  );
  function GetDetails() {
    const value = useContext(Naming);
    return (
      <div className="container">
        <Paper>
          <TableContainer>
            <Table size="large" padding="checkbox" color="inherit">
              <TableHead>
                <TableRow>
                  {[
                    "Sl.no.",
                    "Name of Book",
                    "Author",
                    "Language",
                    "Year",
                    "Actions",
                  ].map((element, index) => {
                    return (
                      <TableCell align="center" key={index}>
                        {element}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              {arr ? (
                value.map((element, index) => {
                  return (
                    <TableBody key={index}>
                      <TableRow>
                        <TableCell align="center">{element.id}</TableCell>
                        <TableCell>{element.title}</TableCell>
                        <TableCell align="left">{element.author}</TableCell>
                        <TableCell>{element.language}</TableCell>
                        <TableCell align="center">{element.year}</TableCell>
                        <TableCell align="center">
                          <Button
                            onClick={() => {
                              navigate("/viewbook/" + index);
                            }}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })
              ) : (
                <TableCell>Loading !!!!</TableCell>
              )}
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  }
}
