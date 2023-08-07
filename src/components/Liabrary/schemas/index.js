import * as yup from "yup";

export const basicSchema = yup.object().shape({
  title: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  author: yup
    .string()
    .max(20, "Must be 10 characters or less")
    .required("Required"),
  isbn: yup
    .string()
    .max(12, "Must be 12 characters or less")
    .required("Required"),
  date: yup.date().nullable().required("required"),
});

export const AuthorSchema = yup.object().shape({
  authorName: yup
    .string()
    .max(20, "Must be 20 Character or less")
    .required("Required"),
  date: yup.date().nullable().required("Required"),
  bio: yup
    .string()
    .max(150, "Must be 150 character or less")
    .required("Required"),
});
