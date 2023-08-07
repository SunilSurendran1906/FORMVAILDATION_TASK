import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Renamed to useDataProvider
  const [newFormData, setFormData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  // const [FormEdit, setFormEdit] = useState({
  //   title: "",
  //   author: "",
  //   isbn: "",
  //   data: "",
  //   isEditing: false,
  // });
  // const [authorEdit, setAuthorEdit] = useState({
  //   name: "",
  //   date: "",
  //   bio: "",
  //   isEditing: false,
  // });

  return (
    <DataContext.Provider
      value={{
        newFormData,
        setFormData,
        setAuthorData,
        authorData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
export default DataProvider;
