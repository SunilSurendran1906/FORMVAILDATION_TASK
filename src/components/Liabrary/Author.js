import React, { useContext } from "react";
import { useFormik } from "formik";
import { AuthorSchema } from "./schemas";
import { DataContext } from "../../Context/DataContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Author = () => {
  let [state] = useSearchParams();
  console.log(state.get("id"));
  const { authorData, setAuthorData } = useContext(DataContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: authorData[state.get("id")]
      ? authorData[state.get("id")]
      : {
          authorName: "",
          date: "",
          bio: "",
        },
    validationSchema: AuthorSchema,
    // onSubmit,
  });
  return (
    <div className="container">
      <div className="card">
        <div className="header-book">Author-Details</div>
        <div className="title mb-3">
          <label for="Author-Name" className="form-label ">
            Author-Name
          </label>
          <input
            type="text"
            className="form-control"
            id="authorName"
            value={formik.values.authorName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter the Author-Name"
          />
          {formik.errors.authorName ? (
            <p className="error">{formik.errors.authorName}</p>
          ) : null}
        </div>
        <div className="title mb-3">
          <label for="date" className="form-label">
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
        <div className="form-floating">
          <textarea
            className="form-control"
            type="text"
            placeholder="Enter the BioGraphy"
            id="bio"
            style={{ height: "80px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bio}
          ></textarea>
          <label for="floatingTextarea2">BioGraphy</label>
          {formik.errors.bio ? (
            <p className="error">{formik.errors.bio}</p>
          ) : null}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (state.get("id")) {
              let data = authorData;
              data[state.get("id")] = formik.values;
              setAuthorData(data);
            } else {
              setAuthorData([formik.values, ...authorData]);
            }

            formik.resetForm();
            navigate("/authorCollection");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Author;
