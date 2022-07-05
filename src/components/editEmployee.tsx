import { Link, NavLink, useParams } from "react-router-dom";
import update from "../service/update";
import "./details.css";

export default function Details() {
  const params = useParams();
  return (
    <>
      <div className="tabContainer">
        <NavLink
          to="/"
          // className="tabMenu"

          className={({ isActive }) =>
            isActive ? "tabMenu tabbackground" : "tabMenu tbackground"
          }
          //  activeClassName="active-menu-item"
          onClick={() => update("Added", `${params.id}`)}
        >
          Added
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "tabMenu tabbackground" : "tabMenu tbackground"
          }
          onClick={() => update("In-check", `${params.id}`)}
        >
          In-check
        </NavLink>
        <NavLink
          to="/"
          className="tabMenu"
          onClick={() => update("Approved", `${params.id}`)}
        >
          Approved
        </NavLink>
        <NavLink
          to="/"
          className="tabMenu"
          onClick={() => update("Active", `${params.id}`)}
        >
          Active
        </NavLink>
        <NavLink
          to="/"
          className="tabMenu"
          onClick={() => update("Inactive", `${params.id}`)}
        >
          Inactive
        </NavLink>
      </div>

      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        View Update Status
      </Link>
    </>
  );
}
