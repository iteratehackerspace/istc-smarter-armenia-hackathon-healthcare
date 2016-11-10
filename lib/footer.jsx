import React from 'react';

const { Component } = React;

export default
class footer extends Component {
  constructor() {
    super();
  }

  render() {
    const infoStyle = {
      paddingLeft: '100px',
      color: 'purple',
      display: 'inline-block',
      textAlign: 'center',
      fontWeight: 'bold',
    }

    const span = {
      color: 'purple',
    }
    return (
      <div>
        <div style = {infoStyle}>iteratehackerspace </div>
        <span style = {span}>     2016 &#169;</span>
        <a style = {infoStyle}
          href = "https://iteratehackerspace.github.io/" target="_blank"> Check out our website </a>
      </div>
    )
  }
}
