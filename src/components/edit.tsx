import { useLocation, Link, useParams } from "react-router-dom";
import "./details.css";
import axios from "axios";

type userState = {
  status: string;
  id: string;
};

export default function Edit() {
  const location = useLocation();
  const user: userState = location.state as userState;
  const { id, status } = useParams();

  const api = `https://62c0eed7eff7f7856f071380.mockapi.io/employee/${id}`;

  return (
    <>
      <div className="tabContainer">
        <div
          className={user.status === "Added" ? "active" : "inactive"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "Added",
              })
              .catch((err) => console.log(err));
          }}
        >
          Added
        </div>

        <div
          className={user.status === "In-check" ? "active" : "inactive"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "In-check",
              })
              .catch((err) => console.log(err));
          }}
        >
          In-check
        </div>
        <div
          className={status === "Approved" ? "active" : "inactive"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "Approved",
              })
              .catch((err) => console.log(err));
          }}
        >
          Approved
        </div>
        <div
          className={status === "Active" ? "active" : "inactive"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "Active",
              })
              .catch((err) => console.log(err));
          }}
        >
          Active
        </div>
        <div
          className={status === "Inactive" ? "active" : "inactive"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "Inactive",
              })

              .catch((err) => console.log(err));
          }}
        >
          Inactive
        </div>
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
