import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
class ViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: patientDetailsData.viewPatientDetails(props.match.params.id)
    };
    console.log(props.match.params.id);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allPatients");
  }

  render() {
    const { patient } = this.state;
    if (!patient) {
      return <h1>No patients found</h1>;
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
            Viewing Patient
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
            <Label>Name:--</Label>
            {patient.name}
            <br />
            <Label>Email:--</Label>
            {patient.email}
            <br />
            <Label>DateofBirth:--</Label>
            {patient.dob}
            <br />
            <Label>Location:--</Label>
            {patient.location}
            <br />
            <Label>Mobile:--</Label>
            {patient.mobile}

            <br />
            <div className="FormField">
              {/*Write code here to create close button */}
              <Button onClick={this.handleClose}>Close</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ViewPatient;
