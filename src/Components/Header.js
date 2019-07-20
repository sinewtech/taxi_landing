import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
// import "./header.css";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalsignup: false,
      modallogin: false,
      modalmessage: false,
      isOpen: false,
      user: false,
      message: "",
      title: ""
    };
  }
  togglemenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar
        style={{ minHeight: "105px" }}
        color="primary"
        expand="md"
        fixed="top"
        dark
      >
        <NavbarBrand style={{ color: "white", fontWeight: "bolder" }} href="/">
          <NavLink to="/">
            <img id="navLogo" alt="Logo" src="/imagotipo.png" />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={this.togglemenu} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                style={{ color: "white" }}
                to="/equipo"
              >
                Equipo
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
