import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Main from './components/main';
import AppBar from './components/AppBar';

// import Switch from 'react-router-dom/Switch';
// import Route from 'react-router-dom/Route';
// import login from './components/login';
// import signup from './components/signup';


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      
      <div className="App">
      {/* <AppBar/> */}

        {/* <Link to='/'>Home</Link>
        <Link to="/login">Login</Link>
      <Link to="/signup">sign up</Link> */}
      <Main/>
      </div>
      
    );
  }
}

export default App;
