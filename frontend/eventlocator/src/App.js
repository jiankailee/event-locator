import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import SwitchComponent from './components/SwitchComponent'
import SideBar from './components/landing/sidebar'
import "./components/landing/sidebarStyles.css";

// import Switch from 'react-router-dom/Switch';
// import Route from 'react-router-dom/Route';
// import login from './components/login';
// import signup from './components/signup';

class App extends Component {
  state = {
    box_open: false,
    logged_in: false,
    username: null,
    endpoint: "http://proj309-tg-07.misc.iastate.edu:8080"
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
  menuClosed = (state) => {
    this.setState({ box_open: false });
  }
  render() {
    console.log("app"+this.state.username);
    return (
      <div className="App">
        <AppBar username={this.state.username} callbackFromParent={this.myCallback} closeBar={this.menuClosed} logged_in={this.state.logged_in} logged_out={this.setLogin} />
        <SideBar id="sidebar_zdex"  pageWrapId={"page-wrap"} outerContainerId={"App"} isOpen={this.state.box_open} onStateChange={this.isMenuOpen} width={'200px'} logged_in={this.state.logged_in} username={this.state.username} callbackFromParent={this.myCallback}/>
        <SwitchComponent callbackFromParent={this.setLogin} />
      </div>
    );
  }
}

export default App;
