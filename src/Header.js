// Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const customStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = customStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Crema
        </Typography>
        <Button color="inherit" className={classes.button}>
          Login
        </Button>
        <Button color="inherit" className={classes.button}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
