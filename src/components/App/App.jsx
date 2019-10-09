import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core';
import { common as commonColors } from '@material-ui/core/colors/index';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import PageSearch from '../PageSearch/PageSearch';
import PageMovie from '../PageMovie/PageMovie';
import PageError from '../PageError/PageError';
import Layout from '../Layout/Layout';
import {
  SEARCH_PAGE_ROUTE,
  FAVORITES_PAGE_ROUTE,
  WATCHED_PAGE_ROUTE,
  MOVIE_PAGE_ROUTE,
} from '../../constants/routes';
import PageFavorites from '../PageFavorites/PageFavorites';
import PageWatched from '../PageWatched/PageWatched';

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
            path={SEARCH_PAGE_ROUTE}
            component={PageSearch}
          />
          <Route
            path={MOVIE_PAGE_ROUTE}
            component={PageMovie}
          />
          <Route
            exact
            path={FAVORITES_PAGE_ROUTE}
            component={PageFavorites}
          />
          <Route
            exact
            path={WATCHED_PAGE_ROUTE}
            component={PageWatched}
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
