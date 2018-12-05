import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import CloseIcon from '@material-ui/icons/Close';
import BackButton from '@material-ui/icons/KeyboardArrowLeft';
import LocalEvents from './localEventBox'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class eventInfoBox extends Component {
  passCloseBox = () => {
    this.props.callbackFromParent();
  }
  backToAllEvents = () => {
    this.props.backToAllEvents();
    console.log("reset")
  }
  goToPage = (info) => {
    this.props.viewEvent(info);
  }
  render() {
    if (this.props.boxContent === 0) {
      return (
        <div id="event_info_box">
          <div id="top_button_section_sidebar">
            <div id="top_x_button_long" onClick={this.passCloseBox}><CloseIcon /></div>
          </div>
          <div id="event_inside_box">
            <LocalEvents loggedIn={this.props.loggedIn} goToPage={this.goToPage} />
          </div>
        </div>
      );
    }
    else {
      return (
        <div id="event_info_box">
          <div id="top_button_section_sidebar">
            <div id="back_button_sidebar" onClick={this.backToAllEvents}><BackButton /></div>
            <div id="top_x_button" onClick={this.passCloseBox}><CloseIcon /></div>
          </div>
          <div id="event_inside_box">
            <p id="event_box_title">{this.props.currentInfo.eventName}</p>
            <Card id="selected_event_card">
              <CardContent>
                <p id="event_box_description">{this.props.currentInfo.description}<br></br><br></br><b>Address:</b><br></br>{this.props.currentInfo.address}</p>
                <p id="more_info_box_individual"></p>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }
  }
}

export default eventInfoBox;