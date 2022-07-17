import "./update.css";
import { useState } from "react";
import api from "../../api/employees";
import { UserState } from "../../interface/UserState";

export default function Tabs({ id, status }: UserState) {
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

  const updateEmployee = (addStatus: string) => {
    try {
      api
        .put(`employee/${id}`, {
          id: id,
          employment_status: addStatus,
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log("Error adding employee");
    }
  };

  return (
    <div className="tabContainer">
      <div
        className={activeTab === "Added" ? "added" : "inactivebox"}
        onClick={() => {
          updateEmployee("Added");
          handleTab1();
        }}
      >
        Added
      </div>

      <div
        className={activeTab === "In-check" ? "incheck" : "inactivebox"}
        onClick={() => {
          updateEmployee("In-check");
          handleTab2();
        }}
      >
        In-check
      </div>
      <div
        className={activeTab === "Approved" ? "approved" : "inactivebox"}
        onClick={() => {
          updateEmployee("Approved");
          handleTab3();
        }}
      >
        Approved
      </div>
      <div
        className={activeTab === "Active" ? "active" : "inactivebox"}
        onClick={() => {
          updateEmployee("Active");
          handleTab4();
        }}
      >
        Active
      </div>
      <div
        className={activeTab === "Inactive" ? "inactive" : "inactivebox"}
        onClick={() => {
          updateEmployee("Inactive");
          handleTab5();
        }}
      >
        Inactive
      </div>
    </div>
  );
}
