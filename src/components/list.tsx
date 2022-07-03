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
      {props.names.map((name) => {
        return (
          <tr key={name.id}>
            <td>{name.id}</td>
            <td>{name.name}</td>
            <td>{name.role}</td>
            <td>{name.address}</td>
            <td>{name.email}</td>
            <td>{name.phone}</td>
            <td style={{ textAlign: "center" }}>{name.employment_status}</td>
            <td>
              <Link to={"/detail"}>Update Status</Link>
            </td>
          </tr>
        );
      })}
    </>
  );
}
