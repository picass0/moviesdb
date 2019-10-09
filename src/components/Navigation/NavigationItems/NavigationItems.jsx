import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeadLink from '../HeadLink/HeadLink';
import { FAVORITES_PAGE_ROUTE, SEARCH_PAGE_ROUTE, WATCHED_PAGE_ROUTE } from '../../../constants/routes';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.common.black,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: '1.2rem',

    '@media(min-width: 40rem)': {
      fontSize: '1rem',
      flexDirection: 'row',
      color: theme.palette.common.white,
    },
  },
}));

function NavigationItems() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <HeadLink to={SEARCH_PAGE_ROUTE}>Search</HeadLink>
      <HeadLink to={WATCHED_PAGE_ROUTE}>Watched</HeadLink>
      <HeadLink to={FAVORITES_PAGE_ROUTE}>Favorites</HeadLink>
    </div>
  );
}

export default NavigationItems;
