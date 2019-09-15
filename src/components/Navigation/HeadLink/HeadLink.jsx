import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
    padding: theme.spacing(2, 0),

    '@media(min-width: 40rem)': {
      padding: theme.spacing(0),
      margin: theme.spacing(0, 4),
    },

    '&:hover, &:active': {
      textDecoration: 'underline',
    },
  },
}));

function HeadLink({ children, to }) {
  const classes = useStyles();
  return (
    <NavLink className={classes.link} to={to}>{children}</NavLink>
  );
}

HeadLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default HeadLink;
