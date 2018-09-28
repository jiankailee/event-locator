import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({

  container: {
    //display: 'flex',
    flexWrap: 'wrap',
    
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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



class Login extends React.Component {
  state={
    userInfo:{
      user:'',
      password:''
    }
  }
    // this.onChange= this.change.bind(this);
    // this.onSubmit=this.submit.bind(this);
  
  
  // change=e=>{
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
    
  // }
// submit =e=>{
//   e.preventDefault();
//   console.log(this.state);
//   let json=JSON.stringify(this.state);
//   console.log(json);
// }
  componentDidMount(){
    this.signup();
  }
  signup=e=>{
    const {userInfo}=this.state;
    // console.log(userInfo.user,userInfo.password)
    fetch(`http://localhost:4000/product/add?user=${userInfo.user}&password=${userInfo.password}`)
    .catch(err=>console.log(err))
    
  }
  renderThanks=_=>
    <div>thank you sign up</div>
  
  render() {
    
    const { classes } = this.props;
    const {userInfo}=this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="email"
          label="Email"
          name="email"
          className={classes.textField}
          value={userInfo.user}
          onChange={e=>this.setState({userInfo:{...userInfo,user:e.target.value}})}
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
          value={userInfo.password}
          onChange={e=>this.setState({userInfo:{...userInfo,password:e.target.value}})}
        />
        <Button onClick={e=>this.signup(e)} variant="contained" className={classes.button}>
          singup 
        </Button>
        {this.renderThanks}
        </form>
      // <form onSubmit={this.onSubmit}>
      // <input name="email" placeholder="Email" value={this.state.email}
      // type="text" onChange={this.onChange}/>
      // <input name="password" placeholder="Password" value={this.state.password}
      // onChange={this.onChange}
      // />
      // <button onClick={e=>this.onSubmit(e)}>Login in</button>
      // </form>

    );
  }
}



export default withStyles(styles)(Login);
