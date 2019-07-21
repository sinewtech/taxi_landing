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
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
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
            <div id="navLogoDiv">
              <img id="navLogo" alt="Logo" src="/imagotipo.png" />
            </div>
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={this.togglemenu} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="navLinkActive"
                exact
                to={{ pathname: "/", hash: "cliente" }}
              >
                Cliente
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="navLinkActive"
                exact
                style={{ color: "black" }}
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
export default Header;
