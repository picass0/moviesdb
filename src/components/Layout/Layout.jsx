import React from 'react';
import PropTypes from 'prop-types';
import DesktopHeader from '../Navigation/PageHeader/DesktopHeader/DesktopHeader';
import MobileHeader from '../Navigation/PageHeader/MobileHeader/MobileHeader';

function Layout({ children }) {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <main>
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
