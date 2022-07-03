import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Signup from "./components/signup";
import { EmployeeList, Details } from "./pages/imports";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/table" element={<EmployeeList />} />
      <Route path="/detail" element={<Details />} />
      <Route path="/" element={<Signup />} />
    </Routes>
  </Router>
);

reportWebVitals();
