import { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const errors = {};
    const { data } = this.state;
    if (data.name.trim() === "") errors.name = "Fullname is required.";
    if (data.role.trim() === "") errors.role = "Role is required.";
    if (data.address.trim() === "") errors.address = "Address is required.";
    if (data.email.trim() === "") errors.email = "email is required.";
    if (data.phone.trim() === "") errors.phone = "Phone number is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "Full name is required";
    }
    if (name === "role") {
      if (value.trim() === "") return "Role is required";
    }
    if (name === "address") {
      if (value.trim() === "") return "Address is required";
    }
    if (name === "email") {
      if (value.trim() === "") return "Email is required";
    }
    if (name === "phone") {
      if (value.trim() === "") return "Phone is required";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton = (label) => {
    return (
      <div className="register__button">
        <button disabled={this.validate()} className="button__primary">
          {label}
        </button>
      </div>
    );
  };

  renderInput = (name, label, type = "text", placeholder) => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        hint={placeholder}
        errors={errors[name]}
      />
    );
  };
}

export default Form;
