import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  '@keyframes lds-ripple': {
    '0%': {
      top: '36px',
      left: '36px',
      width: '0',
      height: '0',
      opacity: '1',
    },
    '100%': {
      top: '0',
      left: '0',
      width: '72px',
      height: '72px',
      opacity: '0',
    },
  },
  'lds-ripple': {
    display: 'inline-block',
    position: 'relative',
    width: '80px',
    height: '80px',
    '& div': {
      position: 'absolute',
      border: '4px solid #000',
      opacity: '1',
      'border-radius': '50%',
      animation: '$lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
    },
    '& div:nth-child(2)': {
      'animation-delay': '-0.5s',
    },
  },
}));

function LoadingWheel(props) {
  const classes = useStyles();
  if (props.loading) {
    return (
      <div style={{ textAlign: 'center', verticalAlign: 'center' }}>
        <div className={classes['lds-ripple']}>
          <div />
          <div />
        </div>
      </div>
    );
  }

  return (
    <>
      {props.children}
    </>
  );
}

LoadingWheel.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,

};

export default LoadingWheel;
