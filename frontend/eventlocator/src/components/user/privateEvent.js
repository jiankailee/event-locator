import React from 'react';
import Geocode from "react-geocode";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


Geocode.enableDebug();
// Geocode.setApiKey("AIzaSyD2PmGt0njVsFK-hgSwBkVXcQc8kd1Vsp4");
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
class PrivateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allevent: [],
    }
  }


  componentDidMount() {
    this.getEvent();
  }
  getEvent = _ => {
    fetch('http://proj309-tg-07.misc.iastate.edu:8080/privateevents')
      .then(response => response.json())
      .then(response => this.setState({ allevent: response.data }))
      .catch(err => console.log(err))
  }
  render() {
    const { classes } = this.props;
    const display = this.state.allevent.map((event, index) => {
      return <div key={index}>
        <Card >
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {event.eventName}
            </Typography>
            <Typography variant="h5" component="h2">
              {event.description}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {event.address}
            </Typography>
            <Typography component="p">
              {event.starttime}  to  {event.endtime}
            </Typography>
          </CardContent>
        </Card>
      </div>
    })
    //  for(var i=0;i<this.state.allevent.length;i++){
    //   //  console.log(this.state.allevent[i])
    //    display+=<div>{this.state.allevent[i].eventName}</div>
    //  }

    return (
      <div id="eventlist">
        <h3>Private Event List</h3>
        {display}
      </div>
    )
  }
}

export default withStyles(styles)(PrivateEvent);