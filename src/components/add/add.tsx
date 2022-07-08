import { useEffect, useState } from "react";
import "./add.css";
import { Link } from "react-router-dom";
import employees from "../../api/employees";
import Modal from "../modal/modal";

export default function Add() {
  const [formState, setFormState] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {}, [name, role, address, email, phone]);

  const handleForm = async (e: any) => {
    e.preventDefault();
    const body = {
      name: name,
      role: role,
      address: address,
      email: email,
      phone: phone,
      employment_status: "Added",
    };

    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    };

    try {
      const response = await employees.post("/employee", body, config);
      if (response.status !== 200) {
        setFormState(true);
      }
    } catch (e) {
      console.log("Adding api error");
    }
  };

  return (
    <div className="container__signup">
      {formState === true && <Modal />}
      <Link to="/" className="">
        Go Back
      </Link>
      <div className="inner__container">
        <header className="header__signup">
          <p className="header__title">Add an Employee</p>
          <p className="description">welcome to motion</p>
        </header>
        <form onSubmit={handleForm}>
          <div className="user__input">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="user__input">
            <label>Role</label>
            <input
              type="text"
              placeholder="Enter Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <div className="user__input">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="user__input">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="user__input">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <input
            type="submit"
            value="Add Employee"
            className="button__signup"
          />
        </form>
      </div>
    </div>
  );
}
