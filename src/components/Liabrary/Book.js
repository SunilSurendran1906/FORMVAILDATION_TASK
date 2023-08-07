import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { basicSchema } from "./schemas";
import { DataContext } from "../../Context/DataContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Book = () => {
  const { newFormData, setFormData } = useContext(DataContext);
  let [state] = useSearchParams();
  console.log(state.get("id"));
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: newFormData[state.get("id")]
      ? newFormData[state.get("id")]
      : {
          title: "",
          author: "",
          isbn: "",
          date: "",
        },
    validationSchema: basicSchema,
  });
  console.log(newFormData);
  return (
    <div className="container">
      <div className="card">
        <div className="header-book">Book</div>
        <div className="title mb-3">
          <label htmlFor="title" className="form-label ">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter the Book Title"
          />
          {formik.errors.title ? (
            <p className="error">{formik.errors.title}</p>
          ) : null}
        </div>
        <div className="title mb-3">
          <label htmlFor="auhor" className="form-label ">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="author"
            placeholder="Enter the Author"
          />
          {formik.errors.author ? (
            <p className="error">{formik.errors.author}</p>
          ) : null}
        </div>
        <div className="title mb-3">
          <label htmlFor="isbm" className="form-label">
            ISBN Number
          </label>
          <input
            type="number"
            className="form-control"
            id="isbn"
            value={formik.values.isbn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter the ISBN-Number"
          />
          {formik.errors.isbn ? (
            <p className="error">{formik.errors.isbn}</p>
          ) : null}
        </div>
        <div className="title mb-3">
          <label htmlFor="date" className="form-label">
            Publicatin Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="dd-mm-yyyy"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.date ? (
            <p className="error">{formik.errors.date}</p>
          ) : null}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (newFormData[state.get("id")]) {
              let data = newFormData;
              data[state.get("id")] = formik.values;
              setFormData(data);
            } else {
              setFormData([formik.values, ...newFormData]);
            }

            formik.resetForm();
            navigate("/bookStore");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Book;
