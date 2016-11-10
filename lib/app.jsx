import React from 'react';
import RealTimeLedger from './realTimeLedger';
import { render } from 'react-dom';

const { Component } = React;

let status = [
  { room1: Array(16).fill(false),
    room2: Array(16).fill(false),
    machines: Array(16).fill(false), },
]

class Application extends Component {
  constructor() {
    super();
    this.state = {trans: [], count:0};
  }

  componentDidMount() {
    const patient = 'patient';
    const hospitals = ['Shengavit Medical Center', 'Hanrapetakan Hospital',
                      'SlavMed Medical Center', 'Izmirlian Medical Center'];
    const spot = max => Math.floor(Math.random() * max);

      setInterval(() => {
        const newTrans = {
          patient_id: `Patient 0x${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          bed_id: `Bed 2g${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          machine_id: `Machine 3y${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          doctor_id: `Doctor 8z${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          hospital: hospitals[spot(hospitals.length)],
          payment: `${Math.floor(Math.random() * 100000)} AMD`,
        };
        this.setState({...this.state,
          trans:[...this.state.trans, newTrans],
          count:this.state.count+1,
        });
      }, 2 * 1000);
  }

  render() {
    const vidStyle= {
    position: 'fixed',
    minWidth: '100%',
    minHeight: '100%',
    zIndex: '-100',
    backgroundSize: 'cover'
  };
    const ledgerStyle= {

      list_items:{
        listStyleType: 'none',
        fontFamily: 'sans-serif',
        fontSize: '15px',
        color: 'white',
        margin: '0.5em auto',
        padding: '.50rem',
        wordWrap: 'break-word',
        transition: 'top 1s',
        width: '140%',
        textAlign: 'center',
      },
      container:{
        marginLeft: '2vw',
        opacity: '.8',
        width:'45%',
        fontSize: '20px',
        marginTop:'30vh',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        height:'60vh',
        borderRadius: '20px',
        display: 'inline-block',
        overflowY: 'scroll',
        scrollSpeed: 'slow',
        background: 'linear-gradient(to right, #6E6D74, #607899)',
        marginBottom: '0',
      },
      stylee: {
        display: 'flex',
        background: 'linear-gradient(to right, #6E6D74, #607899)',
        scrollBehavior: 'smooth',
        transition: 'ease-in 2s',
        animationName: 'anim',
        textAlign: 'center',
        height: '3rem',
        width: '100%',
      },
      styleFirst: {
        backgroundColor: '#6E6D74',
        display: 'flex',
        width: '45%',
        position: 'fixed',
        borderRadius: '5px',
        height: '3rem',
        fontWeight: 'Bold',
      },
    };
    return (
      <div>
        <video playsInline autoPlay muted loop style={vidStyle}>
          <source src={'/Ground-Zero.webm'} type={'video/webm'}/>
        </video>
        <RealTimeLedger transactions={this.state.trans}
			myStyle={ledgerStyle}/>
      </div>
    );
  }
}

render(<Application />,
       document.getElementById('container'));
