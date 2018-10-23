import React, { Component } from 'react';
//import logo from './logo.svg';
import './../App.css';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import login from './login';
import signup from './signup';
import Landing from './landing/landingPage';
import userInfo from './user/userInfo';

// import Switch from 'react-router-dom/Switch';
// import Route from 'react-router-dom/Route';
// import login from './components/login';
// import signup from './components/signup';

class SwitchComponent extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={signup} />
          <Route path="/login" component={login} />
          <Route path="/user/:userName" component={userInfo} />
        </Switch>
    );
  }
}

export default SwitchComponent;
