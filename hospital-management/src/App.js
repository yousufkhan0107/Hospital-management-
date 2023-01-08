import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import "./App.css";
import ViewProfile from "./pages/ViewProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import EditAppointment from "./pages/EditAppointment";
import AllAppointments from "./pages/AllAppointments";
import ViewAppointment from "./pages/ViewAppointment";
import AddPatient from "./pages/AddPatient";
import BookAppointment from "./pages/BookAppointment";
import AllPatients from "./pages/AllPatients";
import ViewPatient from "./pages/ViewPatient";
import EditPatient from "./pages/EditPatient";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <div className="row">
            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/viewProfile" component={ViewProfile} />
            <Route path="/editAppointment/:appId" component={EditAppointment} />
            <Route path="/allAppointments" component={AllAppointments} />
            <Route path="/viewAppointment/:appId" component={ViewAppointment} />
            <Route path="/addPatient" component={AddPatient} />
            <Route path="/allPatients" component={AllPatients} />
            <Route path="/viewPatient/:id" component={ViewPatient} />
            <Route path="/editPatient/:id" component={EditPatient} />
            <Route path="/bookAppointment" component={BookAppointment} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
