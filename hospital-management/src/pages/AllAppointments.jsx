import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import AddPatient from "./AddPatient.jsx";
import { appDetailsData } from "./data";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
class AllAppointments extends Component {
  constructor() {
    super();
    this.state = {
      appointmentsList: appDetailsData.getData()
      //Write function to get the appointment details with the name as appointmentsList:
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleView(e) {
    const appId = e.target.value;
    this.props.history.push(`/viewAppointment/${appId}`);
  }
  handleEdit(e) {
    const appId = e.target.value;
    console.log(appId);

    this.props.history.push(`/editAppointment/${appId}`);
  }
  handleDelete(e) {
    const appId = e.target.value;

    appDetailsData.deleteAppointment(appId);
    this.setState({ appointmentsList: appDetailsData.getData() });
  }
  appsList() {
    if (this.state.appointmentsList.length === 0)
      return <h1>No Appointments Found</h1>;
  }
  render() {
    const { appointmentsList } = this.state;

    return (
      <div style={{ height: "100%" }}>
        <NavBar />

        <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
          {appointmentsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Appoinments Found
            </h1>
          ) : (
            <div style={{ height: "100%", width: "100%" }}>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    fontSize: "2em",
                    color: "Slate Blue"
                  }}
                >
                  List of All Appointments
                </p>
              </div>
              <ListGroup horizontal>
                {appointmentsList.map((appointment, index) => (
                  /*Write code here to list the appointments along with the buttons*/
                  <div>
                    <ListGroupItem>{appointment.name}</ListGroupItem>
                    <ListGroupItem>{appointment.slot}</ListGroupItem>
                    <ListGroupItem>
                      <Button
                        value={appointment.appId}
                        onClick={this.handleView}
                      >
                        View
                      </Button>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Button
                        value={appointment.appId}
                        onClick={this.handleEdit}
                      >
                        Edit
                      </Button>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Button
                        value={appointment.appId}
                        onClick={this.handleDelete}
                      >
                        Delete
                      </Button>
                    </ListGroupItem>
                  </div>
                ))}
              </ListGroup>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default AllAppointments;
