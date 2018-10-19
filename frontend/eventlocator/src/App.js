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
  render() {
    return (
      <div className="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
        <AppBar/>
        <SwitchComponent/>
      </div>
    );
  }
}

export default App;
