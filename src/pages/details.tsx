import { NavLink } from "react-router-dom";
import "./details.css";

export default function Details() {
  return (
    <>
      <div className="tabContainer">
        <NavLink to="#" className="tabMenu">
          Added
        </NavLink>
        <NavLink to="#" className="tabMenu">
          In-check
        </NavLink>
        <NavLink to="#" className="tabMenu">
          Approved
        </NavLink>
        <NavLink to="#" className="tabMenu">
          Active
        </NavLink>
        <NavLink to="#" className="tabMenu">
          Inactive
        </NavLink>
      </div>
    </>
  );
}
