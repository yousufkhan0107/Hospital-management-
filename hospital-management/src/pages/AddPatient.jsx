import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
      location: "",
      mobile: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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
      alert("Patient Added successfully");
      patientDetailsData.add(
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      console.log("insdie patitent ");
      console.log(patientDetailsData.getData());

      this.props.history.push("/allPatients");
    }
  }
  handleCancel(e) {
    this.props.history.push("/allPatients");
  }
  canBeSubmitted() {
    const { name, email, dob, location, mobile } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      dob.length > 0 &&
      location.length > 0 &&
      mobile.length > 0
    );
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const name = this.state.name;
    const date = new Date();
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em"
            }}
          >
            Adding a Patient
          </p>
        </div>
        {/* Write code here to create fields and input labels for name,email,dob,mobileno and location  */}
        <div className="col" style={{ backgroundColor: "lavender" }}>
          {/*Write code here to create uname, email, dob, location, mobileno labels and inputs */}
          <Label>Unmae</Label>
          <Input
            type="text"
            onChange={this.handleChange}
            name="name"
            id="exampleEmail"
            placeholder="Enter Unmae"
          />
          <Label>Email</Label>
          <Input
            type="email"
            onChange={this.handleChange}
            name="email"
            id="exampleEmail"
            placeholder="Enter mail"
          />

          <Label>Dob</Label>

          <Input
            type="date"
            onChange={this.handleChange}
            name="dob"
            id="exampleDate"
            placeholder="date placeholder"
          />
          <Label>location</Label>
          <Input
            type="text"
            onChange={this.handleChange}
            name="location"
            id="location"
            placeholder="Enter location"
          />

          <Label>mobileno</Label>
          <Input
            type="number"
            onChange={this.handleChange}
            name="mobile"
            id="mobileNo"
            placeholder="Enter mobileno"
          />

          <div className="FormField">
            {/* Write code here to create Register Button */}
            <br />
            <Button onClick={this.handleSubmit}> Submit</Button>{" "}
            <Button onClick={this.handleCancel}>Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPatient;
