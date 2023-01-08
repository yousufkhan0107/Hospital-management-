import React, { useState } from "react";
import Medilogo from "../images/Medi-Logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/*should have a Navbar brand, toggler and the NavItem (logout) should be linked to sign-in page */}
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <img style={{ width: "30%" }} alt="Logo" src={Medilogo} />
          DMRD
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <ReactLink style={{ margin: "15px" }} to="/addPatient">
                <strong> AddPatient </strong>
              </ReactLink>
            </NavItem>

            <NavItem>
              <ReactLink style={{ margin: "15px" }} to="/allPatients">
                <strong>AllPatient</strong>
              </ReactLink>
            </NavItem>
            <NavItem>
              <ReactLink style={{ margin: "15px" }} to="/bookAppointment">
                <strong> Book Appointment </strong>
              </ReactLink>
            </NavItem>
            <NavItem>
              <ReactLink style={{ margin: "15px" }} to="/allAppointments">
                <strong> All Appointment </strong>
              </ReactLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar style={{ marginLeft: "300px" }}>
              <DropdownToggle nav caret>
                <strong> User </strong>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <ReactLink to="viewProfile">View Profile</ReactLink>
                </DropdownItem>

                <DropdownItem>
                  {" "}
                  <ReactLink to="sign-in">Logout</ReactLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Example;
