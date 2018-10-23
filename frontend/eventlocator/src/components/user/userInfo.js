import React, { Component } from 'react';


import ButtonAppBar from './../AppBar';
import Grid from './grid';
import '../../App.css';

console.log(window.location.href);


class userInfo extends Component {
  
  render() {
    console.log(this.props.match.params.userName);
    return (
      <div display= 'flex'>
      
      </div>
      
    );
  }
}

export default userInfo;