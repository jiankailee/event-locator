import React, { createRef, Component } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

class sideArrow extends Component {
  constructor(props){
    super(props)
  }
  openBox = () => {
    this.props.openBox();
  }
  render() {
    return(
      <Button onClick={this.openBox} id="side_button">></Button>
    );
  }
}

export default sideArrow;