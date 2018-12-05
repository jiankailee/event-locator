import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({

  container: {
    flexWrap: 'wrap',
  },
  textField: {
    display: 'block',
    margin: 'auto',
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

class signup extends Component {

    state = {
      userInfo:{
      username: '',
      password: '',
      email: '',
      address: '',
      signed: false
      }
    }

  componentDidMount(){
    this.signup();
  }
  signup = e => {
    const {userInfo}=this.state;
    if(userInfo.username!==""&&userInfo.password!==""&&userInfo.email!==""&&userInfo.address!==""){
    fetch(`http://proj309-tg-07.misc.iastate.edu:8080/usersInfo/add?username=${userInfo.username}&password=${userInfo.password}&email=${userInfo.email}&address=${userInfo.address}`)
    this.setState({userInfo:{...userInfo,signed:true}});
    }
  }

  render() {
    const { classes } = this.props;
    const {userInfo}=this.state;
    let printSigned;
    if(userInfo.signed){
      printSigned=<div>Thank you for registering! Please login in. </div>
    }
    return (
      <div>
        <h2>Sign Up</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="username"
            label="Username"
            name="username"
            className={classes.textField}
            value={userInfo.username}
            onChange={e=>this.setState({userInfo:{...userInfo,username:e.target.value}})}
            margin="normal"
          />
          <TextField
            name="password"
            id="password"
            label="Password"
            className={classes.textField}
            value={userInfo.password}
            type="password"
            margin="normal"
            onChange={e=>this.setState({userInfo:{...userInfo,password:e.target.value}})}
          />
          <TextField
          id="email"
          label="Email"
          name="email"
          className={classes.textField}
          value={userInfo.email}
          onChange={e=>this.setState({userInfo:{...userInfo,email:e.target.value}})}
          margin="normal"
          />

          <TextField
            id="address"
            label="Address"
            name="address"
            type="address"
            className={classes.textField}
            value={userInfo.address}
            onChange={e=>this.setState({userInfo:{...userInfo,address:e.target.value}})}
            margin="normal"
          />

           <Button onClick={e=>this.signup(e)} variant="contained" className={classes.button}>
          Sign Up
        </Button>
        {printSigned}
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(signup);
