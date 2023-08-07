import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

const AuthorCollection = () => {
  const { authorData, setAuthorData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate(`/author/?id=${index}`);
  };
  const handleDelete1 = (index) => {
    const updatedAuthorData = authorData.filter((_, id) => id !== index);
    setAuthorData(updatedAuthorData);
  };

  return (
    <div className="table-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Author-Name</th>
            <th scope="col">Publicatin Date</th>
            <th scope="col">BioGraphy</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {authorData.length > 0 ? (
            authorData.map((value, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{value.authorName}</td>
                <td>{value.date}</td>
                <td>{value.bio}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete1(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div className="display">
              <h2 className="no-author">No Authors Data</h2>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorCollection;
