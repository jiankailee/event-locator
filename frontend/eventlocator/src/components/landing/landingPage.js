import React, { Component } from 'react';

import Grid from './grid';
import Mapbox from './mapbox';




class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        {/* <div height="100%"><Grid/></div> */}
        <Mapbox />
      </div>
    );
  }
}

export default Landing;