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
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <ButtonToolbar>
        <DropdownButton bsStyle={'primary'} title="Hospitals" id="dropdown-size-medium">
          <MenuItem eventKey="1">'Shengavit'</MenuItem>
          <MenuItem eventKey="2">'Hanrapetakan'</MenuItem>
          <MenuItem eventKey="3">'SlavMed'</MenuItem>
          <MenuItem eventKey="4">'Izmirlian'</MenuItem>
          <MenuItem eventKey="5">'NorMed'</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    </div>

    );
  }
};
