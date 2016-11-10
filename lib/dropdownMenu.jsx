import React from 'react';
import {SplitButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

const {Component} = React;

export default
class DropdownMenu extends Component {
  constructor() {
    super();
  }

  render() {
  

    return (

      <SplitButton title='Hospitals' key={i} id={`split-button-basic-${i}`} >
        <MenuItem eventKey="1">"Action"</MenuItem>
        <MenuItem eventKey="2">"Another action"</MenuItem>
        <MenuItem eventKey="3">"Something else here"</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">"Separated link"</MenuItem>
    </SplitButton>

    );
  }
};
