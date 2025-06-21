import React, { useEffect, useState } from "react";
import SimpleTable from "./components/SimpleTable";
import axios from "axios";

const columnDefs = [
  { headerName: "Họ và tên", field: "name" },
  { headerName: "Ngày Tháng Năm Sinh", field: "birth_date" },
  { headerName: "Trường", field: "university" },
];

// const data = [
//   {
//     employee_name: "Aruni Jayawardena",
//     emp_id: "S001",
//     duration: "01/02/2023 - 02/02/2023",
//   },
//   {
//     employee_name: "Dinesh Silva",
//     emp_id: "S002",
//     duration: "03/02/2023 - 04/02/2023",
//   },
//   {
//     employee_name: "Priyanka Bandara",
//     emp_id: "S003",
//     duration: "05/02/2023 - 06/02/2023",
//   },
//   {
//     employee_name: "Lakshitha Rajapaksa",
//     emp_id: "S004",
//     duration: "07/02/2023 - 08/02/2023",
//   },
//   {
//     employee_name: "Naveen Ratnayake",
//     emp_id: "S005",
//     duration: "09/02/2023 - 10/02/2023",
//   },
//   {
//     employee_name: "Sachini Nisansala",
//     emp_id: "S006",
//     duration: "11/02/2023 - 12/02/2023",
//   },
//   {
//     employee_name: "Ishan De Silva",
//     emp_id: "S007",
//     duration: "13/02/2023 - 14/02/2023",
//   },
//   {
//     employee_name: "Maneesha Perera",
//     emp_id: "S008",
//     duration: "15/02/2023 - 16/02/2023",
//   },
//   {
//     employee_name: "Ravin Wickramaratne",
//     emp_id: "S009",
//     duration: "17/02/2023 - 18/02/2023",
//   },
//   {
//     employee_name: "Tharushi Liyanage",
//     emp_id: "S010",
//     duration: "19/02/2023 - 20/02/2023",
//   },
// ];

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API_URL}/students`) // ✅ Thay bằng endpoint thực tế của bạn
      .then((response) => {
        setData(response.data.data); // Giả định API trả về mảng đối tượng có các field tương tự
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>
        <b>Viettel Digital talent 2025</b>
      </h1>
      <h1 style={{ textAlign: "center" }}>
        Danh sách sinh viên mảng <b>Cloud</b>
      </h1>
      <SimpleTable columnDefs={columnDefs} data={data} />
    </div>
  );
};

export default App;
