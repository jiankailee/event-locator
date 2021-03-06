import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Mapbox from './mapbox';
import '../../App.css';

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  paper: {
    padding: "0px",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
   
    <div className={classes.root}>
    
      <Grid container >
        
        <Grid item xs={3}>
        
          
         
        </Grid>
        
        <Grid item xs={9}>
         
        
      </Grid>
       
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
