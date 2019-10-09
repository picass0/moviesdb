import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import NavigationItems from '../../../NavigationItems/NavigationItems';
import Backdrop from '../../../../UI/Backdrop/Backdrop';

const useStyles = makeStyles((theme) => ({
  container: {
    top: 0,
    left: 0,
    position: 'fixed',
    height: '100vh',
    width: '70vw',
    background: theme.palette.common.white,
    zIndex: 100,
  },
}));

function SideDrawer(props) {
  const classes = useStyles();
  const display = props.active ? 'block' : 'none';
  return (
    <>
      <Backdrop clicked={props.backdropClicked} active={props.active} />
      <div className={classes.container} style={{ display }}>
        <NavigationItems />
      </div>
    </>
  );
}

SideDrawer.propTypes = {
  backdropClicked: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default SideDrawer;
