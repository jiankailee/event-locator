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

// import Switch from 'react-router-dom/Switch';
// import Route from 'react-router-dom/Route';
// import login from './components/login';
// import signup from './components/signup';


class App extends Component {
  render() {
    return (

      <div className="App">
      <AppBar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={signup} />
          <Route path="/login" component={login} />
          <Route path="/user/:userName" component={userInfo} />
        </Switch>
      </div>
    );
  }
}

export default App;
