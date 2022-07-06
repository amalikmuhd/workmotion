import axios from "axios";
import { useEffect, useState } from "react";

interface IUser {
  id: string;
  name: string;
  role: string;
  address: string;
  phone: string;
  employment_status: string;
}

export default function userData(id: string) {
  const [userData, setUserData] = useState<IUser>();
  const api = `https://62c0eed7eff7f7856f071380.mockapi.io/employee/${id}`;

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(api);
        if (response && response.data) {
          setUserData(response.data);
        }
      } catch (err) {
        console.log("There is a problem with the api");
      }
    };

    fetchEmployee();
  }, [api]);

  return userData;
}

/* <div className="tabContainer">
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
      </div> */
