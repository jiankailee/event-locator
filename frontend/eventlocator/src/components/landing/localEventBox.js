import React, { createRef, Component } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import CloseIcon from '@material-ui/icons/Close';
import BackButton from '@material-ui/icons/KeyboardArrowLeft';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class eventInfoBox extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    allLocation: [],
  }
  truncate_description = (description) =>{
    if(description.length > 100){
      return description.substring(0, 100) + "...";
    }
    else return description;
  }
  Example = ({ components }) => (
    <div>
      {components.map((component, i) => <Card onClick={()=>this.props.goToPage(component)} className="sidebar_card" key={i}>
        <CardContent>
          <h3 className="total_view_title_text">{component.eventName}</h3>
          <p className="total_view_body_text_border">{component.address}</p>
          <p className="total_view_body_text">{this.truncate_description(component.description)}</p>
        </CardContent>
      </Card>)}
    </div>
  )
  componentDidMount() {
    this.getUsersInfo();
  }
  getUsersInfo = _ => {
    //fetch('http://proj309-tg-07.misc.iastate.edu:8080/events')
    fetch('http://localhost:8080/events')
        .then(response => response.json())
        .then(response => this.setState({ allLocation: response.data }))
        // .then({data})=>{
        //   console.log(data)
        // })
        .catch(err => console.log(err))
    //console.log(this.state.alluser);
}
  render() {
    let box_content;

    if(this.state.allLocation.length > 0){
      box_content = <this.Example components={this.state.allLocation} />
    }
    else{
      box_content = <p id="no_local_events">No local events found</p>
    }
    return (
      <div>
        {box_content}
      </div>
    );
  }
}

export default eventInfoBox;