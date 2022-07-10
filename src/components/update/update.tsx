import { useLocation, Link } from "react-router-dom";
import Tabs from "./tabs";
import { UserState } from "../../interface/UserState";
import "./update.css";

export default function Update() {
  const location = useLocation();
  const user: UserState = location.state as UserState;
  const { id, status } = user;

  return (
    <>
      <Tabs id={id} status={status} />

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
