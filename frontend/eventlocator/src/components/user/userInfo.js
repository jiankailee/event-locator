import React, { Component } from 'react';


import ButtonAppBar from './AppBar';
import Grid from './grid';


console.log(window.location.href);


class userInfo extends Component {
  constructor(props){
    super(props);
    name:this.props.match.params.userName;
    
  }
  state = {
    selectedIndex: 0,
  };
  componentDidMount(){
    this.getUser();
  }
  getUser=_=>{
   
  }
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    console.log(this.state.selectedIndex)
  };
  render() {
    // console.log("userInfo: "+this.props.match.params.userName);
    let display
    if(this.state.selectedIndex==0){
      display=<div>Will be a big map on here</div>
    }
    if(this.state.selectedIndex==1){
      display=<div>my info details</div>
    }
    if(this.state.selectedIndex==2){
      display=<div>will be create event on here</div>
    }
    if(this.state.selectedIndex==3){
      display=<div>will be show event on here</div>
    }
    return (
      <div display= 'flex'>
      <ButtonAppBar name={this.props.match.params.userName}/>
      {/* <Grid name={this.props.match.params.userName}/> */}
      <button onClick={event => this.handleListItemClick(event, 0)}>
      map
      </button>
      <button onClick={event => this.handleListItemClick(event, 1)}>
      My Info
      </button>
      <button onClick={event => this.handleListItemClick(event, 2)}>
      Create Event
      </button>
      <button onClick={event => this.handleListItemClick(event, 3)}>
      My Event List
      </button>
      {display}
      </div>
     
    );
  }
}

export default userInfo;