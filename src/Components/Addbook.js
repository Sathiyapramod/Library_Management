import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { API } from "./general";

let formValidationSchema = yup.object({
  author: yup.string().required(),
  country: yup.string().required(),
  imageLink: yup.string().required(),
  language: yup.string().required(),
  link: yup.string().required(),
  pages: yup.number().required("Enter only Number"),
  title: yup.string().required(),
  year: yup.number().min(133).max(2023).required("Enter only Year"),
});

function Addbook() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      author: "",
      country: "",
      imageLink: "",
      language: "",
      link: "",
      pages: "",
      title: "",
      year: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      const newBook = {
        author: values.author,
        country: values.country,
        imageLink: values.imageLink,
        language: values.language,
        link: values.link,
        pages: values.pages,
        title: values.title,
        year: values.year,
      };
      console.log(newBook);
      fetch(`${API}/Books/`, {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((data) => data.json())
        .then(() => {
          alert("Book added successfully");
          navigate('/books');
        });
    },
  });
  return (
    <div>
      <Typography variant="h5">Create a new Book</Typography>
      <Paper>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column container gap-3"
        >
          <TextField
            id="author"
            name="author"
            label="Enter Author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.author && formik.errors.author
            ? formik.errors.author
            : ""}{" "}
          <br />
          <TextField
            id="country"
            name="country"
            label="Enter Country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.country && formik.errors.country
            ? formik.errors.country
            : ""}
          <br />
          <TextField
            id="imageLink"
            name="imageLink"
            label="Enter Image Link"
            value={formik.values.imageLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.imageLink && formik.errors.imageLink
            ? formik.errors.imageLink
            : ""}
          <br />
          <TextField
            id="language"
            name="language"
            label="Enter Language"
            value={formik.values.language}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.language && formik.errors.language
            ? formik.errors.language
            : ""}
          <br />
          <TextField
            id="link"
            name="link"
            label="Enter link"
            value={formik.values.link}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.link && formik.errors.link ? formik.errors.link : ""}
          <br />
          <TextField
            id="pages"
            name="pages"
            label="Enter Number of Pages"
            value={formik.values.pages}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pages && formik.errors.pages
            ? formik.errors.pages
            : ""}
          <br />
          <TextField
            id="title"
            name="title"
            label="Enter Title of Book"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title
            ? formik.errors.title
            : ""}
          <br />
          <TextField
            id="year"
            name="year"
            label="Enter year of Publishing"
            value={formik.values.year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.year && formik.errors.year ? formik.errors.year : ""}
          <br />
          <br />
          <Divider />
          <Button
            type="submit"
            value="submit"
            size="medium"
            variant="contained"
          >
            Add book
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Addbook;
