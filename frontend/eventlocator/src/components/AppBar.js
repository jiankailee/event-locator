import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const styles = {

  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit"><Link style={{ textDecoration: 'none', color:'white' }} to='/'>Home</Link></Button>

          <Typography variant="title" color="inherit" className={classes.grow}>
            Event Locator
          </Typography>
          
          <Button color="inherit"><Link style={{ textDecoration: 'none', color:'white' }} to="/login">Login</Link></Button>
          <Button color="inherit"><Link style={{ textDecoration: 'none', color:'white' }} to="/signup">sign up</Link> </Button>
          {/* <Link style={{ textDecoration: 'none', color:'white' }} to='/'>Home</Link>
          <Link style={{ textDecoration: 'none', color:'white' }} to="/login">Login</Link>
          <Link style={{ textDecoration: 'none', color:'white' }} to="/signup">sign up</Link>  */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
