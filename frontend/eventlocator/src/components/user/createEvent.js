import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// console.log(window.location.href);

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


class  CreateEvent extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
      username:"",
      address:"",
      eventname:"",
      time:""
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
    this.getUser();
  }

  getUser=_=>{
    fetch(`http://proj309-tg-07.misc.iastate.edu/user/find?name=${this.props.match.params.userName}`)
    .then(response=>response.json())
    .then(response=>this.setState({username: response.data[0].username}))
    .catch(err=>console.log(err))
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    console.log(this.state.selectedIndex)
  };

 

  
  render() {
   const { classes } = this.props;

    return (
      <div>
          <h2>Create A Public Event</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="eventname"
            label="Event Name"
            name="eventname"
            className={classes.textField}
            value={this.state.eventname}
            onChange={this.change}
            margin="normal"
          />
          <TextField
            name="address"
            id="address"
            label="Address"
            className={classes.textField}
	    value={this.state.address}
            margin="normal"
            onChange={this.change}
          />
	    <TextField
            name="time"
            id="time"
            label="Time"
            className={classes.textField}
	    value={this.state.time}
            margin="normal"
            onChange={this.change}
          />
          <Button onClick={e => this.submit(e)} variant="contained" className={classes.button}>
            Create
        </Button>
	</form>
      </div>
     
    );
  }
}

export default CreateEvent;
