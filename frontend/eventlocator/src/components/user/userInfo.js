import React, { Component } from 'react';
import CreateEvent from './createEvent';
import Chat from './chat';
import '../../App.css';
import Eventlist from './list';
import Mapbox from '../landing/mapbox';
import CreatePrivateEvent from './createPrivateEvent';

console.log(window.location.href);


class userInfo extends Component {
  constructor(props){
    super(props);
    // name : this.props.match.params.userName;
    console.log(props)
  }
  state = {
    selectedIndex: 1,
    updatePage: 0,
    username:"",
    password:"",
    address:"",
    email:""
  };
  componentWillReceiveProps(nextProps){
    this.state.selectedIndex = nextProps.location.state.selectedIndex;
    console.log(nextProps)
  }
  componentDidMount(){
    this.getUser();
    // this.get();
  }
  reRender(){
    console.log(this.state.selectedIndex);
    
  }
  getUser=_=>{
    // console.log(this.props.name)
    fetch(`http://proj309-tg-07.misc.iastate.edu:8080/user/find?name=${this.props.match.params.userName}`)
    .then(response=>response.json())
    // .then(response=>console.log(response.data[0].username))
    .then(response=>this.setState({username: response.data[0].username, 
      password: response.data[0].password,
      address: response.data[0].address,email: response.data[0].email}))
    .catch(err=>console.log(err))
  }
  
   handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    //console.log(this.state.selectedIndex)
    // console.log(this.state.selectedIndex);
  };
  render() {
    //console.log(this.props.match.params.userName)
    //console.log(this.state.username+" "+this.state.password+" "+this.state.address+" "+this.state.email)
    let display
    if(this.state.selectedIndex==1){
      display=[<div><div>username: {this.state.username}</div>
              <div>password: {this.state.password}</div>
              <div>address: {this.state.address}</div>
              <div>email: {this.state.email}</div></div>]
    }
    if(this.state.selectedIndex==2){
      display=<CreateEvent/>
    }
    if(this.state.selectedIndex==3){
      display=<Eventlist/>
    }
    if(this.state.selectedIndex==4){
      display=<Chat name={this.state.username}/>
    }
    if(this.state.selectedIndex==5){
      display= 
      <div id="map">
        <Mapbox />
      </div>
    }
    if(this.state.selectedIndex==6){
      display=<CreatePrivateEvent/>
    }
    
    return (
      <div>
      
      {/* <button onClick={event => this.handleListItemClick(event, 0)}>
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
      </button> */}
      {display}

      
      </div>
     
    );
  }
}

export default userInfo;
