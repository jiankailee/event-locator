import React, { Component } from 'react';

import Grid from './grid';
import Mapbox from './mapbox';




class Landing extends Component {
  render() {
    return (
      
      <div display= 'flex' height= '100%'>
      
      {/* <div height="100%"><Grid/></div> */}
      <Mapbox/>
      
      </div>
      
    );
  }
}

export default Landing;