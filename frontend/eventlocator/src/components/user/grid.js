import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from './list';
//import Mapbox from './mapbox';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
   
    <div className={classes.root}>
    
      <Grid container >
        
        <Grid item xs={3}>
        
          <List/>
          
        </Grid>
        
        <Grid item xs={9}>
         {/* <Mapbox/> */}
         
      </Grid>
       
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
