import "./table.css";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  name: string;
  role: string;
  address: string;
  email: string;
  phone: string;
  employment_status: string;
}

export const GetUser: React.FC<IProps> = ({
  id,
  name,
  role,
  address,
  email,
  phone,
  employment_status,
}) => {
  return (
    <>
      return (
      <tr className="list" key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{role}</td>
        <td>{address}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className="employee__status">{employment_status}</td>

        {/* <td>
          <Link
            to={`/edit/${employee.id}`}
            className="add__button"
            style={{ backgroundColor: "#7F56D9", border: "none" }}
          >
            Edit
          </Link>
        </td> */}
      </tr>
      );
    </>
  );
};

// interface IProps {
//   text: string;
// }

// export const Status: React.FC<IProps> = ({ text }) => {
//   return (
//     <div className="status">
//       <span className="status-text">{text}</span>
//     </div>
//   );
// };
