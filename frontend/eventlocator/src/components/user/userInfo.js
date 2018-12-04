import React, { Component } from 'react';
import CreateEvent from './createEvent';
import Chat from './chat';
import '../../App.css';
import Eventlist from './list';
import Mapbox from '../landing/mapbox';
import CreatePrivateEvent from './createPrivateEvent';
import PrivateEvent from './privateEvent';
import SideArrow from '../landing/sideOpenArrow'
import EventInfoBox from '../landing/eventInfoBox'

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
    email:"",
    currentEventInfo: "",
    eventBoxHidden: true,
    boxContent: 0,
  };
  componentWillReceiveProps(nextProps){
    //this.setState({selectedIndex: nextProps.location.state.selectedIndex})
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
    //fetch(`http://proj309-tg-07.misc.iastate.edu:8080/user/find?name=${this.props.match.params.userName}`)
    fetch(`http://localhost:8080/user/find?name=${this.props.match.params.userName}`)
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
  closeBox = () => {
    this.setState({eventBoxHidden: true})
  }
  openBox = () => {
    this.setState({eventBoxHidden: false})
    console.log(this.state.eventBoxHidden)
  }
  backPage = () => {
    this.setState({boxContent: 0});
    console.log(this.state.box)
  }
  viewEvent = (info) => {
    this.setState({currentEventInfo: info, boxContent: 1,})
  }
  render() {
    const pass_marker_info = (info) => {
      this.setState({currentEventInfo: info, eventBoxHidden: false, boxContent: 1,})
    }
    //console.log(this.props.match.params.userName)
    //console.log(this.state.username+" "+this.state.password+" "+this.state.address+" "+this.state.email)
    let display
    const loggedin=true;
    let sideContent;
    if(this.state.eventBoxHidden === true){
      sideContent = <SideArrow openBox={this.openBox}/>;
    }
    else if(this.state.eventBoxHidden === false){
      sideContent = <EventInfoBox loggedIn={loggedin} viewEvent={this.viewEvent} backToAllEvents={this.backPage} callbackFromParent={this.closeBox} currentInfo={this.state.currentEventInfo} boxContent={this.state.boxContent}/>;
    }

    if(this.state.selectedIndex==1){
      display=[<div><div>username: {this.state.username}</div>
              <div>password: {this.state.password}</div>
              <div>address: {this.state.address}</div>
              <div>email: {this.state.email}</div></div>]
    }
    if(this.state.selectedIndex==2){
      display=[<CreateEvent/>,
              <Mapbox height="500px"/>]
    }
    if(this.state.selectedIndex==3){
      display=<Eventlist/>
    }
    if(this.state.selectedIndex==4){
      display=<Chat name={this.state.username}/>
    }
    if(this.state.selectedIndex==6){
      display=<CreatePrivateEvent username={this.state.username}/>
    }
    if(this.state.selectedIndex==7){
      display=<PrivateEvent/>
    }
    if(this.state.selectedIndex==5){
      display= 
        <Mapbox login={loggedin} callbackFromParent={pass_marker_info}/>
          return (
            <div id="landing_map_wrapper">
            {sideContent}
            {display}
            </div>
          );
    }
    else{
      return (
        <div>
        {display}
        </div>
      );
    }
  }
}

export default userInfo;
