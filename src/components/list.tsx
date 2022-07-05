import "./table.css";
import { Link } from "react-router-dom";

type EmployeesList = {
  names: {
    id: string;
    name: string;
    role: string;
    address: string;
    email: string;
    phone: string;
    employment_status: string;
  }[];
};

export default function List(props: EmployeesList) {
  return (
    <>
      {props.names.map((employee) => {
        return (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td>{employee.address}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td style={{ textAlign: "center" }}>
              {employee.employment_status}
            </td>
            <td>
              <Link to={`/edit/${employee.id}`}>Edit</Link>
            </td>
          </tr>
        );
      })}
    </>
  );
}
