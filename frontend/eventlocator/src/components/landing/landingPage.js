import React, { Component } from 'react';

import Grid from './grid';

import AppBar from './../AppBar';




class Landing extends Component {
  render() {
    return (
      
      <div display= 'flex'>
      <AppBar/>
      <Grid/>
      
      </div>
      
    );
  }
}

export default Landing;