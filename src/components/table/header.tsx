import "./table.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h1>Employee List</h1>
      <Link to="/add" className="add__button" style={{ color: "black" }}>
        Add Employee
      </Link>
    </div>
  );
};
