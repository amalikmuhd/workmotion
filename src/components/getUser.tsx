import "./table.css";

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
      </tr>
      );
    </>
  );
};
