import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Geocode from "react-geocode";

// console.log(window.location.href);
Geocode.setApiKey("AIzaSyD2PmGt0njVsFK-hgSwBkVXcQc8kd1Vsp4");
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


class  CreatePrivateEvent extends Component {

  constructor(props){
    super(props);
  }
    state = {
      eventInfo:{
      selectedIndex: 0,
      address:"",
      description:"",
      eventname:"",
      starttime:"",
      endtime:"",
      signed: false,
      long:null,
      lat:null,
      
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

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    console.log(this.state.selectedIndex)
  };

  submit = e => {
     console.log("Submit Button pushed")
    const {eventInfo}=this.state;
    //  let rlat,rlng;
    console.log(eventInfo.address)
    Geocode.fromAddress(eventInfo.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        if(eventInfo.eventname!==""&&eventInfo.address!==""&&eventInfo.description!==""){
            fetch(`http://localhost:8080/privateevents/add?userName=${this.props.username}&eventname=${eventInfo.eventname}&description=${eventInfo.description}&address=${eventInfo.address}&longitude=${lng}&latitude=${lat}&endtime=${eventInfo.endtime}&starttime=${eventInfo.starttime}`);
            this.setState({eventInfo:{...eventInfo,signed:true}});
            console.log("Event Created")
          }
      },
      error => {
        console.error(error);
      }
    );
} 

  
  render() {
  console.log(this.props.username)

   const { classes } = this.props;
   const {eventInfo}=this.state;
   let printSigned;
   if(eventInfo.signed){
	   printSigned=<div>Private event created!</div>
   }
    return (
      <div>
          <h2>Create A Private Event</h2>
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
            name="address"
            id="address"
            label="address"
            className={classes.textField}
	    value={eventInfo.address}
            margin="normal"
            onChange={e=>this.setState({eventInfo:{...eventInfo,address:e.target.value}})}
          />
          <TextField
          name="description"
          id="standard-multiline-flexible"
          label="Description"
          multiline
          rowsMax="4"
          value={eventInfo.description}
          onChange={e=>this.setState({eventInfo:{...eventInfo,description:e.target.value}})}
          className={classes.textField}
          margin="normal"
        />
	    <TextField
        id="starttime"
        label="starttime"
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e=>this.setState({eventInfo:{...eventInfo,starttime:e.target.value}})}
      />
      <TextField
        id="endtime"
        label="endtime"
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e=>this.setState({eventInfo:{...eventInfo,endtime:e.target.value}})}
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

export default withStyles(styles)(CreatePrivateEvent);