import { useLocation, Link, useParams } from "react-router-dom";
import "./edit.css";
import axios from "axios";
import { useState } from "react";

type userState = {
  status: string;
  id: string;
};

export default function Edit() {
  const location = useLocation();
  const user: userState = location.state as userState;
  const { id, status } = useParams();
  const [activeTab, setActiveTab] = useState(status);

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("Added");
  };

  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("In-check");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("Approved");
  };
  const handleTab4 = () => {
    // update the state to tab2
    setActiveTab("Active");
  };
  const handleTab5 = () => {
    // update the state to tab2
    setActiveTab("Inactive");
  };

  const api = `https://62c0eed7eff7f7856f071380.mockapi.io/employee/${id}`;

  return (
    <>
      <div className="tabContainer">
        <div
          className={activeTab === "Added" ? "added" : "inactivebox"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "Added",
              })
              .catch((err) => console.log(err));
            handleTab1();
          }}
        >
          Added
        </div>

        <div
          className={activeTab === "In-check" ? "incheck" : "inactivebox"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "In-check",
              })
              .catch((err) => console.log(err));
            handleTab2();
          }}
        >
          In-check
        </div>
        <div
          className={activeTab === "Approved" ? "approved" : "inactivebox"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "Approved",
              })
              .catch((err) => console.log(err));
            handleTab3();
          }}
        >
          Approved
        </div>
        <div
          className={activeTab === "Active" ? "active" : "inactivebox"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "Active",
              })
              .catch((err) => console.log(err));
            handleTab4();
          }}
        >
          Active
        </div>
        <div
          className={activeTab === "Inactive" ? "inactive" : "inactivebox"}
          onClick={() => {
            axios
              .put(api, {
                id: id,
                employment_status: "Inactive",
              })
              .catch((err) => console.log(err));
            handleTab5();
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
