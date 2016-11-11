import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

const {Component} = React;

export default
class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar collapseOnSelect style={{width: '100%'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
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
              <NavItem eventKey={4} href="#">About Us</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
};
