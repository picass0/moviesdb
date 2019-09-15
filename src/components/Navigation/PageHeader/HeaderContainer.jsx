import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

function HeaderContainer({ children, className }) {
  return (
    <AppBar position="static">
      <Toolbar className={className}>
        {children}
      </Toolbar>
    </AppBar>
  );
}

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default HeaderContainer;
