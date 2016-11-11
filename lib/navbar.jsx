import React from 'react';
import {Nav, NavItem, Navbar, MenuItem, NavDropdown} from 'react-bootstrap';

const {Component} = React;

export default
class NavBar extends Component {
  constructor() {
    super();
  }

  render() {

    const navbar = {
      opacity: '.8',
      width: '100%'
    }

    return (
      <Navbar collapseOnSelect style={navbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><i className={"fa fa-heartbeat"} aria-hidden="true"></i></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Ledger</NavItem>
              <NavItem eventKey={2} href="#">Map</NavItem>
              <NavDropdown eventKey={3} title="Hospitals" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Shengavit</MenuItem>
                <MenuItem eventKey={3.2}>Hanrapetakan</MenuItem>
                <MenuItem eventKey={3.3}>SlavMed</MenuItem>
                <MenuItem eventKey={3.4}>Izmirlian</MenuItem>
                <MenuItem eventKey={3.5}>NorMed</MenuItem>
              </NavDropdown>
              <NavItem eventKey={4} href="https://iteratehackerspace.github.io/" target="_blank">About Us</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
};
