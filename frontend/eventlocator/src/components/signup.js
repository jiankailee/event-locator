import React ,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({

    container: {
      //display: 'flex',
      flexWrap: 'wrap',
      
    },
    textField: {
    display:'block',
    margin:'auto',
    //   marginLeft: theme.spacing.unit,
    //   marginRight: theme.spacing.unit,
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

class signup extends Component{

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

    render(){
        const { classes } = this.props;
        return(
        <div>
        <h2>Sign Up</h2>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                id="name"
                label="name"
                name="name"
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
                margin="normal"
                onChange={this.change}
                />
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
                id="address"
                label="Address"
                name="address"
                className={classes.textField}
                value={this.state.name}
                onChange={this.change}
                margin="normal"
                />

                <Button onClick={e=>this.submit(e)} variant="contained" className={classes.button}>
                Sign Up
                </Button>
            </form>
        </div>
        );
    }
}

export default withStyles(styles)(signup);