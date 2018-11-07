import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import SwitchComponent from './components/SwitchComponent'
import SideBar from './components/landing/sidebar'
import "./components/landing/sidebarStyles.css";
import socketIOClient from 'socket.io-client'

// import Switch from 'react-router-dom/Switch';
// import Route from 'react-router-dom/Route';
// import login from './components/login';
// import signup from './components/signup';

class App extends Component {
  state = {
    box_open: false,
    logged_in: false,
    username: null,
    endpoint: "http://192.168.0.26:8080"
  }
  setLogin = (log_value, username_val) => {
    this.setState({ logged_in: log_value, username: username_val})
  }
  myCallback = () => {
    this.setState({ box_open: !this.state.box_open });
  }
  isMenuOpen = (state) => {
    this.setState({ box_open: state.isOpen });
  }
  render() {
    console.log(this.state.endpoint)
    const socket = socketIOClient(this.state.endpoint);
    socket.on('connection', function(socket){
      console.log('connected');
    });
    return (
      <div className="App">
        <AppBar callbackFromParent={this.myCallback} logged_in={this.state.logged_in} logged_out={this.setLogin} />
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} isOpen={this.state.box_open} onStateChange={this.isMenuOpen} width={'200px'} logged_in={this.state.logged_in} username={this.state.username} callbackFromParent={this.myCallback}/>
        <SwitchComponent callbackFromParent={this.setLogin} />
      </div>
    );
  }
}

export default App;
