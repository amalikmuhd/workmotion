import "./table.css";

import { useState, useEffect } from "react";

import List from "./list";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Table() {
  const [mockData, setMockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = "https://62c0eed7eff7f7856f071380.mockapi.io/employee";

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(api);
        if (response && response.data) setMockData(response.data);
        setLoading(true);
      } catch (err) {
        console.log("There is a proble with the api");
      }
    };

    fetchEmployee();
  }, []);

  return (
    <div className="container">
      <div className="inner__container">
        {loading === true ? (
          <>
            <div className="header">
              <h1>Workmotion Employees</h1>
              <Link
                to="/addEmployee"
                className="add__button"
                style={{ color: "black" }}
              >
                Add User
              </Link>
            </div>

            <table id="employee">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>ROLE</th>
                  <th>ADDRESS</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>EMPLOYEE STATUS</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <List names={mockData} />
              </tbody>
            </table>
          </>
        ) : (
          <p>Loading Data</p>
        )}
      </div>
    </div>
  );
}
