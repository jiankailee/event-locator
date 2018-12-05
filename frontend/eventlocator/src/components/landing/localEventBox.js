import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class eventInfoBox extends Component {
  state = {
    allLocation: [],
    privateLocation: [],
  }
  truncate_description = (description) =>{
    if(description.length > 100){
      return description.substring(0, 100) + "...";
    }
    else return description;
  }
  process_date = (start_time, end_time) =>{
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var event_month;
    var date;
    if(months[parseInt(start_time.substring(5, 7), 10)-1] === months[parseInt(end_time.substring(5, 7), 10)-1]){
      event_month = months[parseInt(start_time.substring(5, 7), 10)-1];
      date = event_month + " " + this.process_suffix(start_time.substring(8,10));
    }
    else{
      event_month = [months[parseInt(start_time.substring(5, 7), 10)-1], months[parseInt(end_time.substring(5, 7), 10)-1]];
      date = event_month[0] + " " + this.process_suffix(start_time.substring(8,10)) + event_month[1] + " - " + this.process_suffix(end_time.substring(8,10));
    }
    return date;
  }
  process_time = (start_time, end_time) =>{
    var time = [start_time.substring(11, 16), end_time.substring(11, 16)];
    var processed_time = [];
    if(parseInt(time[0].substring(0,2), 10) > 11 && parseInt(time[0].substring(0,2), 10) !== 24){
      console.log(time[0].substring(0,2));
      processed_time[0] = (parseInt(time[0].substring(0,2), 10)%12).toString() + start_time.substring(13, 16) + "pm";
    }
    else
      processed_time[0] = time[0].toString() + "am";
    if(parseInt(time[1].substring(0,2), 10) > 11 && parseInt(time[1].substring(0,2), 10) !== 24)
      processed_time[1] = (parseInt(time[1].substring(0,2), 10)%12).toString() + end_time.substring(13, 16) + "pm";
    else
      processed_time[1] = time[1].toString() + "am";
    if(processed_time[0] !== processed_time[1])
      return (processed_time[0] + " - " + processed_time[1]);
    else
      return processed_time[0];
  }
  process_suffix = (number) =>{
    if(number.charAt(0) === '0'){
      number = parseInt(number.substring(1,2), 10);
    }
    if(number === 1 || number === 21 || number === 31){
      return number.toString() + "st";
    }
    else if(number === 2 || number === 22){
      return number.toString() + "nd";
    }
    else if(number === 3 || number === 23){
      return number.toString() + "rd";
    }
    else{
      return number.toString() + "th";
    }
  }
  Example = ({ components }) => (
    <div>
      {components.map((component, i) => <Card onClick={()=>this.props.goToPage(component)} className="sidebar_card" key={i}>
        <CardContent>
          <h3 className="total_view_title_text">{component.eventName}</h3>
          <p className="total_view_body_text_border">{component.address}</p>
          <p className="total_view_body_text_border">{this.truncate_description(component.description)}</p>
          <p className="total_view_body_text">{this.process_date(component.starttime, component.endtime)}</p>
          <p className="total_view_body_text">{this.process_time(component.starttime, component.endtime)}</p>
        </CardContent>
      </Card>)}
    </div>
  )
  getPrivateEvent=_=>{
    fetch('http://proj309-tg-07.misc.iastate.edu:8080/privateevents')
    .then(response=>response.json())
    .then(response=>this.setState({privateLocation: response.data}))
    .catch(err=>console.log(err))
  }
  componentDidMount() {
    this.getUsersInfo();
    this.getPrivateEvent();
  }
  getUsersInfo = _ => {
    fetch('http://proj309-tg-07.misc.iastate.edu:8080/events')
        .then(response => response.json())
        .then(response => this.setState({ allLocation: response.data }))
        .catch(err => console.log(err))
  }
  render() {
    console.log(this.props.loggedIn)
    let box_content;
    if(this.state.allLocation.length > 0){
      if(this.props.loggedIn === false)
        box_content = [<p id="event_box_title">Public Events</p>,<this.Example components={this.state.allLocation} />]
      else
        box_content = [<p id="event_box_title">Public Events</p>,<this.Example components={this.state.allLocation} />,<p id="event_box_title">Private Events</p>, <this.Example components={this.state.privateLocation} />];
    }
    else{
      box_content = <p id="event_box_title">No local events found</p>
    }
    return (
      <div id="sidebox_overflow">
        {box_content}
      </div>
    );
  }
}

export default eventInfoBox;