import "./modal.css";
import { useNavigate } from "react-router-dom";
function Modal() {
  let navigate = useNavigate();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1
            style={{
              textAlign: "center",
              margin: "1rem 0 2rem 0",
              fontSize: 18,
              color: "#101828",
            }}
          >
            Congratulations you have added an employee
          </h1>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              navigate("/");
            }}
            id="cancelBtn"
            className="closeButton"
          >
            View Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
