import React, { Component } from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import login from './login';
import signup from './signup';
import Landing from './landing/landingPage';
import  userInfo from './user/userInfo';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={signup} />
        <Route path="/login" component={login} />
        <Route path="/user/:userName" component={userInfo} />
        
    </Switch>
)

export default Main;
