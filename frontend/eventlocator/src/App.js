import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import login from './components/login';
import signup from './components/signup';
import Landing from './components/landing/landingPage';
import userInfo from './components/user/userInfo';
import AppBar from './components/AppBar';
import Mapbox from './components/landing/mapbox';
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
    logged_in: false
  }
  myCallback = () => {
    this.setState({box_open: !this.state.box_open});
  }
  isMenuOpen = (state) => {
    this.setState({box_open: state.isOpen});
  }
  render() {
    return (
      <div className="App">
        <AppBar callbackFromParent={this.myCallback}/>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} isOpen={this.state.box_open} onStateChange={ this.isMenuOpen } width={'200px'}/>
        <SwitchComponent />
      </div>
    );
  }
}

export default App;
