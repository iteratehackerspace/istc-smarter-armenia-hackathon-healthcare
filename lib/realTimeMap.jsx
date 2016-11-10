import React from 'react';

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
        marginTop:'30vh',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        height:'60vh',
        borderRadius: '20px',
        display: 'inline-block',
            background: 'linear-gradient(to right,rgb(239, 232, 185), #181a33)',
    };

    const parent = {
      justifyContent:'space-between',
      display: 'flex',
      flexWrap: 'wrap',
      borderTop: '1px solid black'
    }
    let updatedList = [];

    if(this.state.currentID < 3) {
      updatedList = hospitalStatus[0].rooms[this.state.currentID-1].map((currBed, idx) => {
        currBed.usedStatus = (Math.random() > 0.5) ? true : false;
        return (
          <div style={currBed.usedStatus ? usedStyle : freeStyle} key={idx}>{currBed.usedStatus ? "Busy" : "Free"}</div>
        );
      });
    }
    else
    {
      updatedList = hospitalStatus[0].machines.map((currMachine, idx) => {
        currMachine.usedStatus = (Math.random() > 0.5) ? true : false;
        return (
          <div style={currMachine.usedStatus ? usedStyle : freeStyle} key={idx}>{currMachine.usedStatus ? "Used" : "Free"}</div>
        );
      });
    }
  return (
      <div style={graphStyle}>
        <StatusBar changeImage={(number) => {
            this.setState({ ...this.state, currentID: number });
          }}
        />
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
    this.state={active: [true, false, false]}
  }

  clickEvent(e) {
    this.props.changeImage(e.currentTarget.id);
    let newState = [false, false, false];
    newState[e.currentTarget.id - 1] = true;
    this.setState({...this.state, active: newState});
  }

  render() {
    const styles = {
      display: 'inline-block',
      heigth: '2%',
      width: 'calc(100%/3)',
      cursor: 'pointer',
      borderRadius: '20px',
      paddingLeft: '50px',
      paddingTop: '5px',
      paddingBottom: '5px',
      transition: 'all 1s',
      fontSize: '23px',
    };
    const activeStyles = {
      display: 'inline-block',
      paddingLeft: '20px',
      heigth: '2%',
      width: 'calc(100%/3)',
      backgroundColor: 'rgb(52, 46, 140)',
      color: 'white',
      opacity: '.9',
      cursor: 'pointer',
      borderRadius: '20px',
      transition: 'all 1s',
      fontSize: '24px',
    };
    return (
      <div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[0] ? activeStyles : styles}
          id={1}>Room1
        </div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[1] ? activeStyles : styles}
          id={2}>Room2
        </div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[2] ? activeStyles : styles}
          id={3}>Machines
        </div>
      </div>
    );
  }
};
