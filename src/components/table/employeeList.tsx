import "./table.css";
import EmployeeCard from "./employeeCard";

type EmployeesList = {
  employee: {
    id: string;
    name: string;
    role: string;
    address: string;
    email: string;
    phone: string;
    employment_status: string;
  }[];
};

export default function EmployeeList(props: EmployeesList) {
  const renderEmployeeList = props.employee.map((employee) => {
    return <EmployeeCard employee={employee} key={employee.id} />;
  });

  return (
    <>
      {renderEmployeeList.length !== 0 ? (
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
          <tbody>{renderEmployeeList}</tbody>
        </table>
      ) : (
        <p style={{ marginTop: 20, color: "#848282" }}>
          Please add an employee by clicking on the add button
        </p>
      )}
    </>
  );
}
