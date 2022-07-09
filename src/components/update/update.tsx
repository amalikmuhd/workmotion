import { useLocation, Link } from "react-router-dom";
import Tabs from "./tabs";
type userState = {
  status: string;
  id: string;
};

export default function Update() {
  const location = useLocation();
  const user: userState = location.state as userState;
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
