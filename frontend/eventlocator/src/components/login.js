import React ,{Component} from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import AppBar from './AppBar';

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

class login extends Component{

    constructor(props){
        super(props);
        this.state = {
          email: '',
          password:'',
      
        };
        this.onChange= this.change.bind(this);
        this.onSubmit=this.submit.bind(this);
      }
      
      change=e=>{
        this.setState({
          [e.target.name]: e.target.value
        })
        
      }
    submit =e=>{
      e.preventDefault();
      console.log(this.state);
      let json=JSON.stringify(this.state);
      console.log(json);
    }
    
  
  
  render() {
    
    const { classes } = this.props;
    return (
        <div>
        <h2>Log in</h2>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="email"
          label="Email"
          name="email"
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
        <Button onClick={e=>this.submit(e)} variant="contained" className={classes.button}>
          Login 
        </Button>
        </form>
        </div>
        );
    }
}

export default withStyles(styles)(login);