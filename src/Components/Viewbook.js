import React from "react";
import { useParams } from "react-router-dom";
import { API } from "./general";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

function Viewbook() {
  const { bookid } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API}/Books/${bookid}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setBook(result));
  }, []);
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-3">
      <Card sx={{ width: 600, height: 400 }} align="center">
        <CardContent align="center">
          <img src={book.imageLink} alt={""} width={100} height={100} title={book.title}/>
          <Typography >
            Title: <b>{book.title}</b>
          </Typography>
          <Typography>
            Author: <b>{book.author}</b>
          </Typography>
          <Typography>Language :{book.language}</Typography>
          <Typography>Country: {book.country}</Typography>
          <Typography>Number of Pages:{book.pages}</Typography>
          <Typography>Year of Publishing: {book.year}</Typography>
          <Typography>
            URL Link:{" "}
            <a href={book.link} target="_blank" rel="noreferrer">
              {book.link}
            </a>
          </Typography>
          <br />
          <Button
            variant="contained"
            onClick={() => navigate("/books")}
            align="center"
          >
            Go back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Viewbook;
