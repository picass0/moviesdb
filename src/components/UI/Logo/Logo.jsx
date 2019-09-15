import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    letterSpacing: 3,
    marginRight: '2rem',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#666',
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.logo}>
      Кинобаза
    </Typography>
  );
}

export default Logo;
