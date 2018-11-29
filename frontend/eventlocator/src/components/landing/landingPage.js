import React, { Component } from 'react';
import Grid from './grid';
import Mapbox from './mapbox';
import SideArrow from './sideOpenArrow'
import '../../App.css'
import EventInfoBox from './eventInfoBox'

class Landing extends Component {
  constructor(props){
    super(props)
  }
  state = {
    currentEventInfo: "",
    eventBoxHidden: true,
    boxContent: 0,
  }
  closeBox = () => {
    this.setState({eventBoxHidden: true})
  }
  openBox = () => {
    this.setState({eventBoxHidden: false})
    console.log(this.state.eventBoxHidden)
  }
  backPage = () => {
    this.setState({boxContent: 0});
    console.log(this.state.box)
  }
  render() {
    const pass_marker_info = (info) => {
      this.setState({currentEventInfo: info, eventBoxHidden: false, boxContent: 1,})
    }
    let sideContent;
    if(this.state.eventBoxHidden === true){
      sideContent = <SideArrow openBox={this.openBox}/>;
    }
    else if(this.state.eventBoxHidden === false){
      sideContent = <EventInfoBox backToAllEvents={this.backPage} callbackFromParent={this.closeBox} currentInfo={this.state.currentEventInfo} boxContent={this.state.boxContent}/>;
    }
    return (
      <div id="landing_map_wrapper">
        {/* <div height="100%"><Grid/></div> */}
        {sideContent}
        <Mapbox callbackFromParent={pass_marker_info}/>
      </div>
    );
  }
}

export default Landing;