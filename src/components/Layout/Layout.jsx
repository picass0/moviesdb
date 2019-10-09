import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import DesktopHeader from '../Navigation/PageHeader/DesktopHeader/DesktopHeader';
import MobileHeader from '../Navigation/PageHeader/MobileHeader/MobileHeader';

function Layout({ history, children }) {
  return (
    <>
      <DesktopHeader />
      <MobileHeader key={history.location.key} />
      <main>
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Layout);
