import "./table.css";

type EmployeesList = {
  names: {
    id: string;
    fname: string;
    lname: string;
    email: string;
    salary: string;
  }[];
};

export default function List(props: EmployeesList) {
  return (
    <>
      {props.names.map((name) => {
        return (
          <tr key={name.id}>
            <td>{name.id}</td>
            <td>{name.fname}</td>
            <td>{name.lname}</td>
            <td>{name.email}</td>
            <td>{name.salary}</td>
          </tr>
        );
      })}
    </>
  );
}
