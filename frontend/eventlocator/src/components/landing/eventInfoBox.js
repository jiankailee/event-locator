import React, { createRef, Component } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import CloseIcon from '@material-ui/icons/Close';

class eventInfoBox extends Component {
  constructor(props){
    super(props)
  }
  passCloseBox = () => {
    this.props.callbackFromParent();
  }
  render() {
    if(this.props.boxContent === 0){
      return (
        <div id="event_info_box">
        <div class="top_x_button" onClick={this.passCloseBox}><CloseIcon/></div>
          <div id="event_inside_box">
          </div>
        </div>
      );
    }
    else{
      return (
        <div id="event_info_box">
        <div class="top_x_button" onClick={this.passCloseBox}><CloseIcon/></div>
          <div id="event_inside_box">
            <p id="event_box_title">{this.props.currentInfo.eventName}</p>
            <p id="event_box_description">{this.props.currentInfo.description}</p>
          </div>
        </div>
      );
    }
  }
}

export default eventInfoBox;