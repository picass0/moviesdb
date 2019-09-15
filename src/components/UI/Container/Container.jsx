import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(10, 4, 0, 4),
  },
}));

function Container(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      { props.children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
