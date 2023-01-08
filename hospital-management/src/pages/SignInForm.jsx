import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { adminDetailsData } from "./data.js";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      adminDetails: adminDetailsData.getData()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    console.log(adminDetailsData.getData());

    e.preventDefault();
    e.stopPropagation();

    const { adminDetails } = this.state;

    let validCredentials = false;
    if (this.canBeSubmitted()) {
      adminDetails.map(admin => {
        if (
          this.state.email === admin.email &&
          this.state.password === admin.password
        ) {
          let currentUser = admin.adminId;
          validCredentials = true;
          adminDetailsData.setCurrentUser(admin.adminId);
          this.props.history.push("/allpatients");
          return;
        }
      });
      if (!validCredentials) {
        alert("please enter valid credentials");
        this.props.history.push("/sign-in");
      }
    }
  }
  canBeSubmitted() {
    const { email, password, adminDetails } = this.state;
    return email.length > 4 && password.length > 4;
  }

  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="col" style={{ backgroundColor: "lavender" }}>
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              <strong style={{ color: "red" }}> Login </strong>
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              <strong style={{ color: "red" }}> Register </strong>
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code here to create labels and fields for username and password */}
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              onChange={this.handleChange}
              name="email"
              id="exampleEmail"
              placeholder="Enter mail"
            />

            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              onChange={this.handleChange}
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
            <br />

            <div className="FormField">
              {/* Write code here to create a login button */}
              <Button
                className="bg bg-primary"
                style={{ marginBottom: "10px" }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;
