import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

const BookStore = () => {
  const { newFormData, setFormData } = useContext(DataContext);
  const navigate1 = useNavigate();

  const handleDelete = (index) => {
    const updatedFormData = newFormData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
  };

  const handleEdit = (index) => {
    navigate1(`/book/?id=${index}`);
  };

  return (
    <div className="table-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author Name</th>
            <th scope="col">ISBM Number</th>
            <th scope="col">Publication Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {newFormData.length > 0 ? (
            newFormData.map((value, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{value.title}</td>
                <td>{value.author}</td>
                <td>{value.isbn}</td>
                <td>{value.date}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div className="display">
              <h2 className="no-author">No bookList Data</h2>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookStore;
