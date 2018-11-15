import React, { Component } from 'react';
import Grid from './grid';
import Mapbox from './mapbox';
import '../../App.css'
import EventInfoBox from './eventInfoBox'



class Landing extends Component {
  constructor(props){
    super(props)
  }
  state = {
    currentEventInfo: "test",
  }
  render() {
    const printvalue = (name) => {
      this.setState({currentEventInfo: name})
    }
    return (
      <div id="landing_map_wrapper">
        {/* <div height="100%"><Grid/></div> */}
        <Mapbox callbackFromParent={printvalue}/>
        <EventInfoBox currentName={this.state.currentEventInfo}/>
      </div>
    );
  }
}

export default Landing;