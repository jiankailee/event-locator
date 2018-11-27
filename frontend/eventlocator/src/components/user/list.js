import React from 'react';
import PropTypes from 'prop-types';
import Geocode from "react-geocode";

Geocode.enableDebug();
Geocode.setApiKey("AIzaSyD2PmGt0njVsFK-hgSwBkVXcQc8kd1Vsp4");
class eventlist extends React.Component {
  constructor(props){
    super(props);
    this.state={
      allevent:[],
    }
  }
  
  
 componentDidMount(){
   this.getEvent();
 }
 getEvent=_=>{
  fetch('http://proj309-tg-07.misc.iastate.edu:8080/events')
  .then(response=>response.json())
  .then(response=>this.setState({allevent: response.data}))
  // .then({data})=>{
  //   console.log(data)
  // })
  .catch(err=>console.log(err))
  //console.log(this.state.alluser);
 }
  render() {
    // let display;
    // let addresss="asd";
    const display=this.state.allevent.map((event,index)=>{
      
      return <div key={index}>{event.eventName}</div>
    })
   
    console.log(this.state.allevent)
  //  for(var i=0;i<this.state.allevent.length;i++){
  //   //  console.log(this.state.allevent[i])
  //    display+=<div>{this.state.allevent[i].eventName}</div>
  //  }
    return (
      <div>
        {display}
      </div>
      )
  }
}

export default eventlist;