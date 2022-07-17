import "./registerForm.css";
import Form from "./form";
import { Link } from "react-router-dom";
import Logo from "./workmotion.jpeg";
import Modal from "../modal/modal";
import employees from "../../api/employees";
import { IoArrowBackOutline } from "react-icons/io5";

export default class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      role: "",
      address: "",
      email: "",
      phone: "",
      employment_status: "Added",
    },
    errors: {},
    isModal: false,
    isLoading: false,
  };

  //AddEmployee
  addEmployee = async () => {
    try {
      const response = await employees.post("/employee", this.state.data);
      if (response.status !== 200) {
        this.setState({ isModal: true });
      }
    } catch (e) {
      console.log("Adding api error");
    } finally {
      setTimeout(() => {
        this.setState({ isLoading: true });
      }, 5000);
    }
  };

  doSubmit = () => {
    //call the server
    this.addEmployee();
    console.log("Submitted");
  };

  render() {
    return (
      <>
        <Link to="/">
          <IoArrowBackOutline style={{ fontSize: 50, color: "#074947" }} />
        </Link>
        <div className="register-container">
          {this.state.isModal && <Modal />}
          <div className="register-header">
            <img src={Logo} alt="" width={80} />
            <p className="header__title">Create an Account</p>
            <p className="header__text">welcome to on workmotion</p>
          </div>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name", "text", "Enter full name here")}
            {this.renderInput("role", "Role", "text", "Enter your role")}
            {this.renderInput(
              "address",
              "Address",
              "address",
              "Enter your address here"
            )}
            {this.renderInput("email", "Email", "email", "Enter email here")}
            {this.renderInput(
              "phone",
              "Phone",
              "text",
              "Enter phone number here"
            )}

            {this.renderButton("Add an employee")}
          </form>
        </div>
      </>
    );
  }
}
