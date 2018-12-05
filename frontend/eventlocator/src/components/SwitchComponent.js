import React, { Component } from 'react';
//import logo from './logo.svg';
import './../App.css';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Login from './login';
import signup from './signup';
import Landing from './landing/landingPage';
import userInfo from './user/userInfo';


class SwitchComponent extends Component {
  myCallback = (log_value, username_value) => {
    this.props.callbackFromParent(log_value, username_value);
  }
  render() {
    return (
      <Switch callbackFromParent={this.myCallback}>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={signup} />
        <Route path="/login"
          render={(props) => <Login {...props} callbackFromParent={this.myCallback} />} />
        <Route path="/user/:userName" component={userInfo} />
      </Switch>
    );
  }
}

export default SwitchComponent;
