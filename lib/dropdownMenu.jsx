import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

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
          <MenuItem eventKey="1"><img src='./doctorFav.ico' />Shengavit</MenuItem>
          <MenuItem eventKey="2"><img src='./doctorFav.ico' />Hanrapetakan</MenuItem>
          <MenuItem eventKey="3"><img src='./doctorFav.ico' />SlavMed</MenuItem>
          <MenuItem eventKey="4"><img src='./doctorFav.ico' />Izmirlian</MenuItem>
          <MenuItem eventKey="5"><img src='./doctorFav.ico' />NorMed</MenuItem>

        </DropdownButton>
      </ButtonToolbar>
    </div>

    );
  }
};
