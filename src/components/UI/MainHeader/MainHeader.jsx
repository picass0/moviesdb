import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(4),
    fontSize: '1.5rem',

    '@media(min-width: 40rem)': {
      fontSize: '3rem',
    },
  },
}));

function MainHeader({ children }) {
  const classes = useStyles();
  return (
    <Typography variant="h3" className={classes.header}>
      {children}
    </Typography>
  );
}

MainHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainHeader;
