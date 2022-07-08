import "./table.css";
import { useState, useEffect } from "react";
import List from "./list";
import { Link } from "react-router-dom";
import api from "../../api/employees";

export default function Table() {
  const [mockData, setMockData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get("employee");
        if (response && response.data) setMockData(response.data);
        setLoading(true);
      } catch (err) {
        console.log("There is a problem with the api");
      }
    };

    fetchEmployee();
  });

  return (
    <div className="container">
      <div className="inner__container">
        {loading === true ? (
          <>
            <div className="header">
              <h1>Workmotion Employees</h1>
              <Link
                to="/add"
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
                  <th>STATUS</th>
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
