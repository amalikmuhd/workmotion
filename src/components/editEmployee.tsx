import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import update from "../service/update";
import "./details.css";

export default function Details() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  type user = {
    id: string;
    name: string;
    role: string;
    address: string;
    phone: string;
    employment_status: string;
  };

  const { id } = useParams();

  const api = `https://62c0eed7eff7f7856f071380.mockapi.io/employee/${id}`;

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(api);
        if (response && response.data) {
          const { name, role, address, phone, employment_status }: user =
            response.data;
          setName(name);
          setRole(role);
          setAddress(address);
          setPhone(phone);
          setStatus(employment_status);
        }
      } catch (err) {
        console.log("There is a problem with the api");
      }
    };

    fetchEmployee();
  }, [api]);

  return (
    <>
      <div className="tabContainer">
        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={() => update("Added", `${id}`)}
        >
          Added
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={() => update("In-check", `${id}`)}
        >
          In-check
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={() => update("Approved", `${id}`)}
        >
          Approved
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={() => update("Active", `${id}`)}
        >
          Active
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={() => update("Inactive", `${id}`)}
        >
          Inactive
        </NavLink>
      </div>

      <div className="tabContainer">
        <div style={{ marginRight: 20 }}>
          <p>Name</p>
          <p>{name}</p>
        </div>
        <div style={{ marginRight: 20 }}>
          <p>Role</p>
          <p>{role}</p>
        </div>
        <div style={{ marginRight: 20 }}>
          <p>Address</p>
          <p>{address}</p>
        </div>
        <div style={{ marginRight: 20 }}>
          <p>Phone</p>
          <p>{phone}</p>
        </div>
      </div>
      <div className="tabContainer">
        <div style={{ marginRight: 20 }}>
          <p>Employement Status</p>
          <p>{status}</p>
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
      </div>
    </>
  );
}
