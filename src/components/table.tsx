import "./table.css";

import List from "./list";

const nameList = [
  {
    id: "1",
    fname: "Abdulmalik",
    lname: "Muhammad",
    email: "bawasuru@gmail.com",
    salary: "4000",
  },
  {
    id: "2",
    fname: "Maria",
    lname: "Anders",
    email: "mariaanders@gmail.com",
    salary: "2,500",
  },
  {
    id: "3",
    fname: "Christina",
    lname: "Berglund",
    email: "Berglund@gmail.com",
    salary: "2,500",
  },
  {
    id: "4",
    fname: "Francisco",
    lname: "Chang",
    email: "franciscochang@gmail.com",
    salary: "2,500",
  },
  {
    id: "5",
    fname: "Atika",
    lname: "Muhammad",
    email: "bawasuru@gmail.com",
    salary: "4000",
  },
];

export default function Table() {
  return (
    <article className="container">
      <h1>List Of Employees</h1>
      <table id="employee">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
        <List names={nameList} />
      </table>
    </article>
  );
}
