import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core';
import { common as commonColors } from '@material-ui/core/colors/index';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import PageSearch from '../PageSearch/PageSearch';
import PageFilm from '../PageFilm/PageFilm';
import PageError from '../PageError/PageError';
import Layout from '../Layout/Layout';
import { MAIN_PAGE_ROUTE, FILM_PAGE_ROUTE } from '../../constants/routes';

const theme = createMuiTheme({
  palette: {
    primary: { main: commonColors.black },
    secondary: { main: '#428bca' },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route
            exact
            path={MAIN_PAGE_ROUTE}
            component={PageSearch}
          />
          <Route
            exact
            path={FILM_PAGE_ROUTE}
            component={PageFilm}
          />
          <Route
            path="*"
            component={PageError}
          />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}
