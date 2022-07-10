import "./table.css";
import { Link } from "react-router-dom";
type EmployeesList = {
  employee: {
    id: string;
    name: string;
    role: string;
    address: string;
    email: string;
    phone: string;
    employment_status: string;
  };
};

export default function EmployeeCard(props: EmployeesList) {
  const { id, name, role, address, email, phone, employment_status } =
    props.employee;
  return (
    <>
      <tr className="list" key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{role}</td>
        <td>{address}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className="employee__status">{employment_status}</td>
        <td>
          <Link
            to="/update"
            className="add__button"
            style={{ backgroundColor: "#7F56D9", border: "none" }}
            state={{
              id: id,
              status: employment_status,
            }}
          >
            Edit
          </Link>
        </td>
      </tr>
    </>
  );
}
