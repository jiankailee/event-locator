import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import RightArrow from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';

class sideArrow extends Component {
  openBox = () => {
    this.props.openBox();
  }
  render() {
    return(
      <Button onClick={this.openBox} id="side_button"><RightArrow id="right_arrow_style"/></Button>
    );
  }
}

export default sideArrow;