import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar.jsx";
import { patientDetailsData } from "./data.js";
import { Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditPatient extends Component {
  constructor(props) {
    super(props);
    const patient =
      patientDetailsData.getPatientDetails(props.match.params.id) || undefined;
    this.state = {
      name: patient.name || "",
      email: patient.email || "",
      dob: patient.dob || "",
      location: patient.location || "",
      mobile: patient.mobile || "",
      patient: patient
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    if (this.canBeSubmitted()) {
      e.preventDefault();

      patientDetailsData.edit(
        this.state.patient.id,
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );

      this.props.history.push("/allPatients");
    }
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
  handleCancel(e) {
    this.props.history.push("/allPatients");
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const { patient } = this.state;
    if (!patient) {
      return <div>Patient doesnot exist</div>;
    }

    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em"
            }}
          >
            Edit patient
          </p>
        </div>
        <div className="FormCenter">
          <div className=" col" style={{ backgroundColor: "lavender" }}>
            {/* Write code here to create labels and input fields for edit patient like name,email,dob,location and mobile*/}
            <Label for="exampleEmail">Name</Label>
            <Input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              id="exampleEmail"
              placeholder="Enter Unmae"
            />
            <Label for="exampleEmail">E-mail</Label>
            <Input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              id="exampleEmail"
              placeholder="Enter mail"
            />

            <Label for="exampleEmail">Date-of-birth</Label>
            <br />
            <Input
              type="date"
              value={this.state.dob}
              onChange={this.handleChange}
              name="dob"
              id="exampleDate"
              placeholder="date placeholder"
            />
            <br />

            <Label for="exampleEmail">location</Label>
            <Input
              type="text"
              value={this.state.location}
              onChange={this.handleChange}
              name="location"
              id="mobileNo"
              placeholder="Enter mobileno"
            />
            <Label for="exampleEmail">Mobile</Label>
            <Input
              type="number"
              value={this.state.mobile}
              onChange={this.handleChange}
              name="mobile"
              id="location"
              placeholder="Enter mobile"
            />
            <div className="SideRow">
              {/* Write code here to create submit and cancel buttons */}
              <Button onClick={this.handleSubmit}>Submit</Button>
              <Button onClick={this.handleCancel}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPatient;
