import React, { createRef, Component } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../App.css';

class eventInfoBox extends Component {
  constructor(props){
    super(props)
  }
  passCloseBox = () => {
    this.props.callbackFromParent();
  }
  render() {
    return (
      <div id="event_info_box">
        {this.props.currentName}
        <div class="top_x_button" onClick={this.passCloseBox}>&#10006;</div>
      </div>
    );
  }
}

export default eventInfoBox;