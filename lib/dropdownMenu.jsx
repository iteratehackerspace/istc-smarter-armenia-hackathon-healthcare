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
      const buttonStyle = {
        backgroundColor: '#75bbb9',
        color: 'white',
      }

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
