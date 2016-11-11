import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

const {Component} = React;

export default
class DropdownMenu extends Component {
  constructor() {
    super();
  }

  render() {


    return (
      <div style={{display: 'block'}}>
        <ButtonToolbar>
        <DropdownButton title="Default button" id="dropdown-size-medium">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    </div>

    );
  }
};
