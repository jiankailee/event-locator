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
  }
    state = {
      eventInfo:{
      selectedIndex: 0,
      latitude:"",
      longitude:"",
      eventname:"",
      time:"",
      signed: false
     }
    };
    //onChange = this.change.bind(this);
    //onSubmit = this.submit.bind(this);

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  //componentDidMount(){
  //  this.getUser();
  //}

  //getUser=_=>{
  //  fetch(`http://proj309-tg-07.misc.iastate.edu/user/find?name=test') //{this.props.match.params.userName}`)
  //  .then(response=>response.json())
  //  .then(response=>this.setState({username: response.data[0].username}))
  //  .catch(err=>console.log(err))
  //}

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    console.log(this.state.selectedIndex)
  };

  submit = e => {
     console.log("Submit Button pushed")
     const {eventInfo}=this.state;
     if(eventInfo.eventname!==""&&eventInfo.latitude!==""&&eventInfo.longitude!==""){
    	fetch(`http://proj309-tg-07.misc.iastate.edu:8080/events/add?eventname=${eventInfo.eventname}&longitude=${eventInfo.longitude}&latitude=${eventInfo.latitude}`)
     this.setState({eventInfo:{...eventInfo,signed:true}});
     console.log("Event Created")
  }
} 

  
  render() {
  //console.log(this.props.match.params.userName)

   const { classes } = this.props;
   const {eventInfo}=this.state;
   let printSigned;
   if(eventInfo.signed){
	   printSigned=<div>Public event created!</div>
   }
    return (
      <div>
          <h2>Create A Public Event</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="eventname"
            label="Event Name"
            name="eventname"
            className={classes.textField}
            value={eventInfo.eventname}
            onChange={e=>this.setState({eventInfo:{...eventInfo,eventname:e.target.value}})}
            margin="normal"
          />
          <TextField
            name="latitude"
            id="latitude"
            label="Latitude"
            className={classes.textField}
	    value={eventInfo.latitude}
            margin="normal"
            onChange={e=>this.setState({eventInfo:{...eventInfo,latitude:e.target.value}})}
          />
	    <TextField
            name="longitude"
            id="longitude"
            label="Longitude"
            className={classes.textField}
            value={eventInfo.longitude}
            margin="normal"
            onChange={e=>this.setState({eventInfo:{...eventInfo,longitude:e.target.value}})}
          />
	    <TextField
            name="time"
            id="time"
            label="Time"
            className={classes.textField}
	    value={eventInfo.time}
            margin="normal"
            onChange={e=>this.setState({eventInfo:{...eventInfo,time:e.target.value}})}
          />
          <Button onClick={e => this.submit(e)} variant="contained" className={classes.button}>
            Create
        </Button>
	{printSigned}
	</form>
      </div>
     
    );
  }
}

export default withStyles(styles)(CreateEvent);
