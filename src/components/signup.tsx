import "./signup.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Signup() {
  const api = "https://62c0eed7eff7f7856f071380.mockapi.io/employee";
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");

  useEffect(() => {}, [name, role, address, email, phone, employmentStatus]);

  const handleForm = async (e: any) => {
    e.preventDefault();
    // console.log(fname, lname, email);
    const body = {
      name: name,
      role: role,
      address: address,
      email: email,
      phone: phone,
      employment_status: "added",
    };
    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    };
    axios.post(api, body, config);
  };

  return (
    <div className="container__signup">
      <header className="header__signup">
        <img src={logo} />
        <p className="header__title">Create an account</p>
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
          />
        </div>
        <div className="user__input">
          <label>Role</label>
          <input
            type="text"
            placeholder="Enter Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="user__input">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="user__input">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user__input">
          <label>Phone</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Link to="/table">Show</Link>
        <input type="submit" value="Submit" className="button__signup" />
      </form>
    </div>
  );
}
