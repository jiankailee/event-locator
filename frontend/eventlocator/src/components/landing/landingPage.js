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
    currentEventInfo: "",
    eventBoxHidden: true,
  }
  closeBox = () => {
    this.setState({eventBoxHidden: "false"})
  }
  render() {
    const pass_marker_info = (info) => {
      this.setState({currentEventInfo: info, eventBoxHidden: false,})
    }
    return (
      <div id="landing_map_wrapper">
        {/* <div height="100%"><Grid/></div> */}
        {!this.state.eventBoxHidden && <EventInfoBox callbackFromParent={this.closeBox} currentInfo={this.state.currentEventInfo}/>}
        <Mapbox callbackFromParent={pass_marker_info}/>
      </div>
    );
  }
}

export default Landing;