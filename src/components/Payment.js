import React, { useState } from "react";
import MaterialTable from "material-table";
import "../pages/Management/management.css";

const empList = [
  {
    id: 1,
    Course: "Master Your Pronounciation Course, ",
    CourseCode: "BSED",
  },
  {
    id: 2,
    Course: "Master Your Pronounciation Course",
    CourseCode: "BSED",
  },
  {
    id: 3,
    Course: "Master Your Pronounciation Course",
    CourseCode: "BSED",
  },
  {
    id: 4,
    Course: "Master Your Pronounciation Course",
    CourseCode: "BSED",
  },
  {
    id: 5,
    Course: "Master Your Pronounciation Course",
    CourseCode: "BSED",
  },
  {
    id: 6,
    Course: "Master Your Pronounciation Course",
    CourseCode: "BSED",
  },
];
const columns = [
  { title: "ID", field: "id", editable: false },
  { title: "Course", field: "Course" },
  { title: "Course Code", field: "CourseCode" },
];
function Payment() {
  const [data, setData] = useState(empList);

  return (
    <div className="courseList">
      <MaterialTable
        title="Course Data"
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

export default Payment;
