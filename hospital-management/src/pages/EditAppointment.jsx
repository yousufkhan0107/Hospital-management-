import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { appDetailsData } from "./data.js";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.css";

class EditAppointment extends Component {
  constructor(props) {
    super(props);
    const appointment =
      appDetailsData.getAppointmentDetails(props.match.params.appId) ||
      undefined;
    this.state = {
      name: appointment.name || "",
      disease: appointment.disease || "",
      appdate: appointment.appdate || "",
      slot: appointment.slot || "",
      description: appointment.description || "",
      appointment: appointment
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleSubmit(e) {
    console.log(
      "Details",
      this.state.appointment.appId,
      this.state.name,
      this.state.disease,
      this.state.appdate,
      this.state.slot,
      this.state.description
    );
    if (true) {
      e.preventDefault();

      appDetailsData.edit(
        this.state.appointment.appId,
        this.state.name,
        this.state.disease,
        this.state.appdate,
        this.state.slot,
        this.state.description
      );
      this.props.history.push("/allAppointments");
    }
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
      name.length > 0 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      slot.length > 0 &&
      description.length > 0
    );
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
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
    const { appointment } = this.state;

    if (!appointment) {
      return <h1>No appointments Found</h1>;
    }
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
            Edit Appointment
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
            <Label for="exampleEmail">Disease</Label>
            <Input
              type="tesx"
              value={this.state.disease}
              onChange={this.handleChange}
              name="disease"
              id="exampleEmail"
              placeholder="Enter mail"
            />

            <Label for="exampleEmail">App-Date</Label>
            <br />
            <Input
              type="date"
              value={this.state.appdate}
              onChange={this.handleChange}
              name="appdate"
              id="exampleDate"
              placeholder="date placeholder"
            />
            <br />

            <Label htmlFor="name">Slots</Label>
            <select
              id="dropdown"
              class="DropDowns"
              name="slot"
              value={this.state.slot}
              ref={input => (this.slots = input)}
              onChange={this.handleChange}
            >
              <option value="N/A">N/A</option>
              <option value="10-11 AM">10-11 AM</option>
              <option value="1-2 PM">1-2 PM</option>
              <option value="3-4 PM">3-4 PM</option>
              <option value="6-8 PM">6-8 PM</option>
            </select>
            <br />
            <Label for="exampleEmail">Description</Label>
            <Input
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              id="location"
              placeholder="Enter location"
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

export default EditAppointment;
