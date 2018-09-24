import React, { Component } from 'react';
//import logo from './logo.svg';

import Grid from './grid';

import AppBar from './../AppBar';



class Landing extends Component {
  render() {
    return (
      
      <div>
      <AppBar/>
      <Grid/>
      </div>
      
    );
  }
}

export default Landing;