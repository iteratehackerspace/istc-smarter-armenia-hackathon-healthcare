import React from 'react';
import DropdownMenu from './dropdownMenu';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

const { Component } = React;

let hospitalStatus = [
  {
    hospitalID: 0,
    rooms: [Array(16).fill({id: 0, usedStatus: true}), Array(16).fill({id: 0, usedStatus: false})],
    machines: Array(16).fill({id: 0, usedStatus: false}),
  },
]

export default
class RealTimeMap extends Component {
  constructor() {
    super();
    this.state = {currentID: 1}
  }

  // componentDidUpdate() {
  //   const newState = this.props.idk.map((currentChange, idx) => {
  //     let currRoom = currHospital.rooms[room - 1];
  //     for (let currBed in currRoom) {
  //       if(currentChange.bedId = currBed.id)
  //         currBed.status = true;
  //     }
  //   });
  // }

  render() {
    const usedStyle = {
      height: 'calc(100%/6)',
      width: 'calc(100%/6)',
      color: '#460e04',
      margin: '20px',
    };

    const freeStyle = {
      height: 'calc(100%/6)',
      width: 'calc(100%/6)',
      color: 'rgb(20, 72, 35)',
      margin: '20px',
    };

    const graphStyle = {
      marginRight: '2vw',
      opacity: '.8',
      width:'37%',  fontSize: '15px',
        marginTop:'10vh',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        height:'60vh',
        borderRadius: '5px',
        display: 'inline-block',
            background: 'linear-gradient(to left, #6E6D74, #5ea3a8)',
    };

    const parent = {
      justifyContent:'space-between',
      display: 'flex',
      flexWrap: 'wrap',
      borderTop: '1px solid black'
    }
    let updatedList = [];



    if(this.state.currentID < 3) {
      let bedIcon = './bedicon32x32.png'
      updatedList = hospitalStatus[0].rooms[this.state.currentID-1].map((currBed, idx) => {
        currBed.usedStatus = (Math.random() > 0.5) ? true : false;
        return (
          <div style={currBed.usedStatus ? usedStyle : freeStyle} key={idx}>{currBed.usedStatus ? "Busy" : "Free"}<img src={bedIcon}/></div>
        );
      });
    }
    else
    {
      updatedList = hospitalStatus[0].machines.map((currMachine, idx) => {
        currMachine.usedStatus = (Math.random() > 0.5) ? true : false;
        return (
          <div style={currMachine.usedStatus ? usedStyle : freeStyle} key={idx}>{currMachine.usedStatus ? "Used" : "Free"}<img src='./lifeline.png'/></div>
        );
      });
    }
  return (
      <div style={graphStyle}>
        <StatusBar changeElm={(number) => {
            this.setState({ ...this.state, currentID: number });
          }}
        />
        <DropdownMenu />
        <div style={parent}>
          {updatedList}
        </div>
      </div>
  );
  };
}

class StatusBar extends Component {
  constructor() {
    super();
    this.clickEvent=this.clickEvent.bind(this);
    this.state={active: 1}
  }

  clickEvent(e) {
    const currentID = e;
    this.props.changeElm(currentID);
    this.setState({...this.state, active: currentID});
  }

  render() {
    const containerStyle = {
      height: '10%',
      display: 'block',
    }

    const tabColor = {
      backgroundColor: '#738182',
    }
    return (
      <div style={containerStyle}>
        <Nav bsStyle="pills" style={tabColor} justified activeKey={this.state.active} onSelect={this.clickEvent}>
          <NavItem eventKey={1} className={'nav-item'}>Room 1</NavItem>
          <NavItem eventKey={2} className={'nav-item'}>Room 2</NavItem>
          <NavItem eventKey={3} className={'nav-item'}>Machines</NavItem>
        </Nav>
      </div>
    );
  }
};
