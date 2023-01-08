import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { patientDetailsData } from "./data.js";
class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsList: patientDetailsData.getData(),
      patientsName: patientDetailsData.getName()
      //Write function to get the data of patients with the name as appointmentsList:
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleView(e) {
    const id = e.target.value;
    this.props.history.push(`/viewPatient/${id}`);
  }
  handleEdit(e) {
    const id = e.target.value;
    this.props.history.push(`/editPatient/${id}`);
  }
  handleDelete(e) {
    const id = e.target.value;
    patientDetailsData.deletePatient(id);
    this.setState({
      patientsList: patientDetailsData.getData()
    });
  }

  render() {
    const { patientsList } = this.state;

    return (
      <div style={{ height: "100%" }}>
        <NavBar />
        <div className=" col" style={{ backgroundColor: "lavender" }}>
          {patientsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Patients Found
            </h1>
          ) : (
            <table
              className="table table-bordered"
              style={{ tableLayout: "auto", width: "100%" }}
            >
              <tbody>
                {this.state.patientsList.map(data => (
                  <div>
                    <tr>
                      <td style={{ margin: "30px" }}>{data.name}</td>
                      <td>
                        <Button value={data.id} onClick={this.handleView}>
                          View
                        </Button>
                      </td>
                      <td>
                        <Button value={data.id} onClick={this.handleEdit}>
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button value={data.id} onClick={this.handleDelete}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </div>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default AllPatients;
