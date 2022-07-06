import React, { useEffect, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddEmployee() {
  const api = "https://62c0eed7eff7f7856f071380.mockapi.io/employee";
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

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
      const response = await axios.post(api, body, config);
      if (response.status === 200) return navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container__signup">
      <div className="inner__container">
        <header className="header__signup">
          {/* <img src={Logo} alt="logo" /> */}
          <p className="header__title">Add a team</p>
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
          <Link to="/" className="button__signup">
            View Employees
          </Link>
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
