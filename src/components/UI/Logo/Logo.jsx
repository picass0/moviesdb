import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  logo: {
    letterSpacing: 3,
    marginRight: '2rem',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#666',
  },
  container: {
    'text-decoration': 'none',
    '&:hover, &:active': {
      'text-decoration': 'none',
    },
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <NavLink to="/" className={classes.container}>
      <Typography variant="h6" className={classes.logo}>
        MovieDB
      </Typography>
    </NavLink>
  );
}

export default Logo;
