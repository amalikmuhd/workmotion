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
      {loading === true ? (
        <>
          <h1>List Of Employees</h1>
          <table id="employee">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Address</th>
                <th>email</th>
                <th>phone</th>
                <th>employment_status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <List names={mockData} />
            </tbody>
          </table>

          <Link
            to="/addEmployee"
            style={{ marginTop: 50, textDecoration: "none" }}
          >
            Add Employee
          </Link>
        </>
      ) : (
        <p>Loading Data</p>
      )}
    </div>
  );
}
