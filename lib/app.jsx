import React from 'react';
import RealTimeLedger from './realTimeLedger';
import RealTimeMap from './realTimeMap';
import Footer from './footer';

import { render } from 'react-dom';

const { Component } = React;

class Application extends Component {
  constructor() {
    super();
    this.state = {trans: [], count:0};
  }

  componentDidMount() {
    const patient = 'patient';
    const hospitals = ['Shengavit', 'Hanrapetakan',
                      'SlavMed', 'Izmirlian', 'NorMed'];
    const spot = max => Math.floor(Math.random() * max);

      setInterval(() => {
        const newTrans = {
          patient_id: `0x${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          bed_id: `2g${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          machine_id: `3y${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          doctor_id: `8z${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
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
    const bodyStyle = {
      height:'100vh',
      width:'100vw',
      display:'flex',
      justifyContent:'space-between',
      display: 'flex',
      flexWrap: 'wrap'
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
        borderRadius: '5px',
        display: 'inline-block',
        overflowY: 'scroll',
        scrollSpeed: 'slow',
        background: 'linear-gradient',
        marginBottom: '0',
      },
      stylee: {
        display: 'flex',
        background: 'linear-gradient(to right, #738182, #5ea3a8)',
        scrollBehavior: 'smooth',
        transition: 'ease-in 2s',
        animationName: 'anim',
        textAlign: 'center',
        width: '100%',
      },
      styleFirst: {
        backgroundColor: '#839493',
        display: 'flex',
        width: '45%',
        position: 'fixed',
        borderRadius: '5px',
        fontWeight: 'Bold',
      },
    };
    const navbar = {

    };
    return (
      <div style={bodyStyle}>
        <video playsInline autoPlay muted loop style={vidStyle}>
          <source src={'/Ground-Zero.webm'} type={'video/webm'}/>
        </video>
        <RealTimeLedger transactions={this.state.trans}
			       myStyle={ledgerStyle} />
        <RealTimeMap />
      </div>
    );
  }
}

render(<Application />,
       document.getElementById('container'));
