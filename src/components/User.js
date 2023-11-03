import React, { useState } from "react";
import MaterialTable from "material-table";
import "../pages/Management/management.css"
const empList = [
  {
    id: 1,
    LastName: "Caintic",
    FirstName: "Ralph",
    Email: "cainticrg.722.stud@cdd.edu.ph",
    Course: "BSIT",
    Year: "Fourth",
  },
  {
    id: 2,
    LastName: "Caintic",
    FirstName: "Ralph",
    Email: "cainticrg.722.stud@cdd.edu.ph",
    Course: "BSIT",
    Year: "Fourth",
  },
  {
    id: 3,
    LastName: "Caintic",
    FirstName: "Ralph",
    Email: "cainticrg.722.stud@cdd.edu.ph",
    Course: "BSIT",
    Year: "Fourth",
  },
  {
    id: 4,
    LastName: "Caintic",
    FirstName: "Ralph",
    Email: "cainticrg.722.stud@cdd.edu.ph",
    Course: "BSIT",
    Year: "Fourth",
  },
  {
    id: 5,
    LastName: "Caintic",
    FirstName: "Ralph",
    Email: "cainticrg.722.stud@cdd.edu.ph",
    Course: "BSIT",
    Year: "Fourth",
  },
  {
    id: 6,
    LastName: "Caintic",
    FirstName: "Ralph",
    Email: "cainticrg.722.stud@cdd.edu.ph",
    Course: "BSIT",
    Year: "Fourth",
  },
];
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Last Name", field: "LastName" },
    { title: "First Name", field: "FirstName" },
    { title: "Email", field: "Email" },
    { title: "Course", field: "Course" },
    { title: "Year", field: "Year" },
  ];
function User() {
  const [data, setData] = useState(empList);


  return (
    <div className="App">
      <MaterialTable
        title="User Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [
                ...data,
                { id: Math.floor(Math.random() * 100), ...newRow },
              ];
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data];
              updatedRows[index] = updatedRow;
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
        rowClassName={() => "bold-row"}
      />
    </div>
  );
}

export default User;
