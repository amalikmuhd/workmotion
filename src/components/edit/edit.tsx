import { useLocation, Link } from "react-router-dom";
import "./edit.css";
import { useState } from "react";
import api from "../../api/employees";

type userState = {
  status: string;
  id: string;
};

export default function Edit() {
  const location = useLocation();
  const user: userState = location.state as userState;
  const { id, status } = user;

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
    // update the state to tab3
    setActiveTab("Approved");
  };
  const handleTab4 = () => {
    // update the state to tab4
    setActiveTab("Active");
  };
  const handleTab5 = () => {
    // update the state to tab5
    setActiveTab("Inactive");
  };

  return (
    <>
      <div className="tabContainer">
        <div
          className={activeTab === "Added" ? "added" : "inactivebox"}
          onClick={() => {
            api
              .put(`employee/${id}`, {
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
            api
              .put(`employee/${id}`, {
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
            api
              .put(`employee/${id}`, {
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
            api
              .put(`employee/${id}`, {
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
            api
              .put(`employee/${id}`, {
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
