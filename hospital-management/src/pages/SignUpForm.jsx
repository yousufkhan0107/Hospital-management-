import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { adminDetailsData } from "./data.js";
import { Button, Label, Input } from "reactstrap";
//import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      password: "",
      dob: "",
      mobileno: "",
      location: ""
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
    e.preventDefault();

    if (this.canBeSubmitted()) {
      adminDetailsData.add(
        this.state.uname,
        this.state.email,
        this.state.password,
        this.state.dob,
        this.state.mobileno,
        this.state.location
      );
      this.setState({ name: e.target.value });
      this.props.history.push("/sign-in");
    }
  }
  canBeSubmitted() {
    const { uname, email, password, dob, mobileno, location } = this.state;

    return (
      uname.length > 4 &&
      email.length > 4 &&
      password.length > 4 &&
      dob.length > 4 &&
      mobileno.length > 4 &&
      location.length > 4
    );
  }

  render() {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className=" col" style={{ backgroundColor: "lavender" }}>
          <div style={{ textAlign: "center", paddingBottom: "10px" }}>
            <NavLink to="/sign-in">
              <h4 style={{ color: "red" }}>Login</h4>
            </NavLink>{" "}
            or
            <NavLink exact to="/">
              <h4 style={{ color: "red" }}> Register </h4>
            </NavLink>
          </div>

          <div>
            {/*Write code here to create uname, email, dob, location, mobileno labels and inputs */}
            <Label for="exampleEmail">Unmae</Label>
            <Input
              type="text"
              onChange={this.handleChange}
              name="uname"
              id="exampleEmail"
              placeholder="Enter Unmae"
            />
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              onChange={this.handleChange}
              name="email"
              id="exampleEmail"
              placeholder="Enter mail"
            />
            <Label for="exampleEmail">password</Label>
            <Input
              type="password"
              onChange={this.handleChange}
              name="password"
              id="pass"
              placeholder="Enter password"
            />
            <Label for="exampleEmail">Dob</Label>
            <br />
            <Input
              type="date"
              onChange={this.handleChange}
              name="dob"
              id="exampleDate"
              placeholder="date placeholder"
            />

            <Label for="exampleEmail">mobileno</Label>
            <Input
              type="number"
              onChange={this.handleChange}
              name="mobileno"
              id="mobileNo"
              placeholder="Enter mobileno"
            />
            <Label for="exampleEmail">location</Label>
            <Input
              type="text"
              onChange={this.handleChange}
              name="location"
              id="location"
              placeholder="Enter location"
            />
            <br />
            <div>
              {/* Write code here to create Register Button */}
              <Button
                className="bg bg-primary"
                style={{ marginBottom: "10px" }}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
