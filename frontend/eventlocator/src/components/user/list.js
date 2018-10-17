import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SelectedListItem extends React.Component {
  constructor(props){
    super(props);
    
  }
  state = {
    selectedIndex: 1,
  };
  

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    // if(this.state.selectedIndex==0){
    //   console.log(true);
      
    // }
  };
  
  render() {
    const { classes } = this.props;
    // console.log("list: "+this.props.name)
    let printinfo;
    if(this.state.selectedIndex==0){
      printinfo=<div>hello</div>
    }
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            selected={this.state.selectedIndex === 0}
            onClick={event => this.handleListItemClick(event, 0)}
          >
           
           <ListItemText primary="Map" />
          </ListItem>
          
          <ListItem
            button
            selected={this.state.selectedIndex === 1}
            onClick={event => this.handleListItemClick(event, 1)}
          >
           
           <ListItemText primary="My Info" />
          </ListItem>
          
          <ListItem
            button
            selected={this.state.selectedIndex === 2}
            onClick={event => this.handleListItemClick(event, 2)}
          >
           
            <ListItemText primary="Create Event" />
          </ListItem>
          <ListItem
            button
            selected={this.state.selectedIndex === 3}
            onClick={event => this.handleListItemClick(event, 3)}
          >
           
            <ListItemText primary="My Event List" />
          </ListItem>
        </List>
        {printinfo}
       
      </div>
    );
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);