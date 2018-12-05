import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { userInfo } from 'os';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const styles = theme => ({

  container: {
    //display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    display: 'block',
    margin: 'auto',
    //marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alluser:[],
      username: '',
      password: '',
      loggedIn:false,
      loggedInError:false,
    };
    this.onChange = this.change.bind(this);
    this.onSubmit = this.submit.bind(this);
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  componentDidMount(){
    this.getUsersInfo();
  }
  getUsersInfo=_=>{
    //fetch('http://proj309-tg-07.misc.iastate.edu:8080/usersInfo')
    fetch('http://proj309-tg-07.misc.iastate.edu:8080/usersInfo')
    .then(response=>response.json())
    .then(response=>this.setState({alluser: response.data}))
    // .then({data})=>{
    //   console.log(data)
    // })
    .catch(err=>console.log(err))
    // console.log(this.state.alluser);
  }

  passLogon = () => {
    this.props.callbackFromParent(true, this.state.username)
    console.log("User: " + this.state.username)
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state.alluser)
    for(var i=0;i<this.state.alluser.length;i++){
      //console.log(this.state.alluser[i].username);
      if(this.state.alluser[i].username===this.state.username&&
        this.state.alluser[i].password===this.state.password){
          this.setState({loggedIn:true});
        console.log("username exist");
        this.passLogon();
      }
    }
    if(this.state.loggedIn===false){
      this.setState({loggedInError:true});
    }
    //let json = JSON.stringify(this.state);
    // console.log(json);
    // console.log(this.state.alluser);
  }



  render() {
    const { classes } = this.props;
    let printError;
    //const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (this.state.loggedIn) {
      return <Redirect to={{pathname: `/user/${this.state.username}`, state: {selectedIndex: 1}}} />;
      //return <Redirect to="/user" />;
    }
    if(this.state.loggedInError){
      printError=<div>Incorrect password. Please try again </div>
    }
    return (
      <div>
        <h2>Log in</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="username"
            label="Username"
            name="username"
            className={classes.textField}
            value={this.state.name}
            onChange={this.change}
            margin="normal"
          />
          <TextField
            name="password"
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={this.change}
          />
          <Button onClick={e => this.submit(e)} variant="contained" className={classes.button}>
            Login
        </Button>
        {printError}
        </form>
        <Link  to='/signup'>Don't have an account? Sign up here.</Link>
      </div>
    );
  }
}

export default withStyles(styles)(login);
