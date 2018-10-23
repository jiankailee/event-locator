import React, { Component } from 'react';
import Grid from './grid';
import Mapbox from './mapbox';
import '../../App.css'



class Landing extends Component {
  render() {
    return (
      <div id="landing_map_wrapper">
        {/* <div height="100%"><Grid/></div> */}
        <Mapbox />
      </div>
    );
  }
}

export default Landing;