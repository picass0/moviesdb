import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 50,
    top: 0,
    left: 0,
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.5)',
  },
}));

function Backdrop(props) {
  const classes = useStyles();
  const display = props.active ? 'block' : 'none';
  return (
    <div style={{ display }} className={classes.backdrop} onClick={props.clicked} />
  );
}

Backdrop.propTypes = {
  active: PropTypes.bool,
  clicked: PropTypes.func.isRequired,
};

export default Backdrop;
