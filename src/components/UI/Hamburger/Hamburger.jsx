import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

function Hamburger({ className, clicked }) {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="Menu"
      className={className}
      onClick={clicked}
    >
      <MenuIcon />
    </IconButton>
  );
}

Hamburger.propTypes = {
  className: PropTypes.string,
  clicked: PropTypes.func,
};

export default Hamburger;
