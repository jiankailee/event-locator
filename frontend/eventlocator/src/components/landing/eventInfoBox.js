import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup, MapControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import L from 'leaflet';
import EventBox from './eventInfoBox'

class eventInfoBox extends Component {
  constructor(props){
    super(props)
  }
  state = {
    currentName: "",
  }
  componentDidMount() {
    console.log("TEST2")
  }
  render() {
    return (
      <div width="100%" height="200px">{this.state.currentName}</div>
    );
  }
}

export default eventInfoBox;