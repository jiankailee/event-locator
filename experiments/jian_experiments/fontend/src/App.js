import React, { Component } from 'react';
import './App.css';
import Login from './login';
import AppBar from './AppBar';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <h1>Event Locator</h1>
        <Login/>
        {/* <Map/> */}
      </div>
      
    );

  }

}

export default App;
