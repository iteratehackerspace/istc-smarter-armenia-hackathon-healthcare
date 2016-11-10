import React from 'react';
import { render } from 'react-dom';

const { Component } = React;

class Application extends Component {
  render () {
    return (
      <div>
	Hello World
      </div>
    );
  }
};

render(<Application/>,
       document.getElementById('container'));
