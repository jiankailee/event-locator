import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './../App.css'

const styles = {
  root: {
    display: 'flex',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



function ButtonAppBar(props) {
  const { classes } = props;
  function test_func() {
    props.callbackFromParent(true)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
        {/* <Toolbar display= 'flex' justify-content='space-between' width='100%'> */}
        <Button onClick={test_func} color="inherit" style={{ textDecoration: 'none', color: 'white', float: 'left' }}>Menu</Button>
        <Link style={{ textDecoration: 'none', color: 'white', flex: 1, padding: '5px' }} to='/'><Button color="inherit">Event Locator</Button></Link>
        <Link style={{ textDecoration: 'none', color: 'white', padding: '5px' }} to="/login"><Button color="inherit">Login</Button></Link>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
