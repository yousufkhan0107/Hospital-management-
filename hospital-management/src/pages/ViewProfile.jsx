import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { adminDetailsData } from "./data.js";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.css";

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: adminDetailsData.getCurrentUser() || {}
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {
    const { admin } = this.state;
    return (
      <div>
        <NavBar />
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Here are your details
          </h3>
        </div>

        <div className="FormCenter">
          <form className="FormFields">
            {/*Write code to create labels for name,email,dob,mobileno and location */}
            <Label>Name:--</Label>
            {admin.name}
            <br />
            <Label>Email:--</Label>
            {admin.email}
            <br />
            <Label>DateofBirth:--</Label>
            {admin.dob}
            <br />
            <Label>Location:--</Label>
            {admin.location}
            <br />
            <Label>Mobile:--</Label>
            {admin.mobileno}

            <br />
            <div className="FormField">
              {/*Write code here to create a close button */}
              <Button onClick={this.handleClose}>Close</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewProfile;
