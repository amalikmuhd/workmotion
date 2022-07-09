import "./table.css";
import { useState, useEffect } from "react";
import EmployeeList from "./employeeList";
import api from "../../api/employees";
import { Header } from "./header";

export default function Table() {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);

  //RetrieveEmployees
  const retrieveEmployees = async () => {
    try {
      const response = await api.get("/employee");
      setLoading(true);
      return response.data;
    } catch (e) {
      console.log("Proble fetching the API");
      setLoading(false);
    }
  };

  useEffect(() => {
    const getAllEmployees = async () => {
      const allEmployees = await retrieveEmployees();
      if (allEmployees) setEmployee(allEmployees);
    };

    getAllEmployees();
  }, []);

  return (
    <div className="container">
      <div className="inner__container">
        {loading === true ? (
          <>
            {Header()}
            <EmployeeList employee={employee} />
          </>
        ) : (
          <p>Loading Data...</p>
        )}
      </div>
    </div>
  );
}
