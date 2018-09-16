import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import login from './login';
import signup from './signup';


const Main = ()=>(
    <Switch>
        <Route exact path="/" />
        <Route path="/signup" component={signup}/>
        <Route path="/login" component={login}/>
    </Switch>
)

export default Main;
