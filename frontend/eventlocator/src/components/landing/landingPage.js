import React, { Component } from 'react';

import Grid from './grid';

import AppBar from './../AppBar';
import Mapbox from './mapbox';




class Landing extends Component {
  render() {
    return (
      
      <div display= 'flex' height= '100%'>
      <AppBar/>
      <div height="100%"><Grid/></div>
      
      
      </div>
      
    );
  }
}

export default Landing;