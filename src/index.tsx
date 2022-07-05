import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import AddEmployee from "./components/addEmployee";
import { EmployeeList, EditEmployee } from "./components/imports";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/edit/:id" element={<EditEmployee />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/" element={<EmployeeList />} />
    </Routes>
  </Router>
);
