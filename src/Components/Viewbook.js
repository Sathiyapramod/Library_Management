import React from "react";
import { useParams } from "react-router-dom";
import { API } from "./general";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Typography } from "@mui/material";

function Viewbook() {
  const { bookid } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`${API}/Books/${bookid}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setBook(result));
  }, []);
  return <ViewDetail book={book} />;
}
function ViewDetail({ book }) {
  let bookdata = book;
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <Paper sx={{ width: 600, height: 400 }}>
        <Card>
          <CardContent align="left">
            <Typography>Title: {book.title}</Typography>
            <Typography>Author: {book.author}</Typography>
            <Typography>Language :{book.language}</Typography>
            <Typography>Number of Pages:{book.pages}</Typography>
            <Typography>Year of Publishing: {book.year}</Typography>
            <Typography>
              URL Link:{" "}
              <a href={book.link} target="_blank">
                {book.link}
              </a>
            </Typography>
            <Button variant="contained" onClick={() => navigate("/books")}>
              Go back
            </Button>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}

export default Viewbook;
